"use client";
import { useState, useEffect } from 'react';
import { runSEOTest } from '../lib/seo-tester';

const SEOReport = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runTest = async () => {
    setLoading(true);
    setError(null);
    setReport(null); // Limpiar reporte anterior
    
    try {
      // Pequeño delay para mostrar el loading
      await new Promise(resolve => setTimeout(resolve, 500));
      const result = await runSEOTest();
      setReport(result);
    } catch (err) {
      console.error('Error en test SEO:', err);
      setError('Error al ejecutar el test SEO: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-green-50';
    if (score >= 70) return 'bg-yellow-50';
    if (score >= 60) return 'bg-orange-50';
    return 'bg-red-50';
  };

  const getStatusIcon = (passed, warning) => {
    if (passed) return '✅';
    if (warning) return '⚠️';
    return '❌';
  };

  const getStatusColor = (passed, warning) => {
    if (passed) return 'text-green-600';
    if (warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          📊 Reporte SEO - Deamon DD
        </h1>
        <p className="text-gray-600 mb-6">
          Análisis completo de optimización para motores de búsqueda
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={runTest}
            disabled={loading}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Analizando...
              </>
            ) : (
              <>
                🚀 Ejecutar Test SEO
              </>
            )}
          </button>
          
          {report && (
            <button
              onClick={runTest}
              disabled={loading}
              className="bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              🔄 Recargar Test
            </button>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {report && (
        <div className="space-y-6">
          {/* Resumen General */}
          <div className={`${getScoreBgColor(report.score)} p-6 rounded-lg border-2`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Resumen General</h2>
              <div className="text-right">
                <div className={`text-4xl font-bold ${getScoreColor(report.score)}`}>
                  {report.score}/100
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {report.summary.grade} - {report.summary.status}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{report.summary.passed}</div>
                <div className="text-sm text-gray-600">Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{report.summary.failed}</div>
                <div className="text-sm text-gray-600">Fallidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{report.summary.warnings}</div>
                <div className="text-sm text-gray-600">Advertencias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{report.summary.totalChecks}</div>
                <div className="text-sm text-gray-600">Total Checks</div>
              </div>
            </div>
          </div>

          {/* Detalles por Categoría */}
          <div className="grid gap-6">
            {Object.entries(
              report.details.reduce((acc, detail) => {
                if (!acc[detail.category]) {
                  acc[detail.category] = [];
                }
                acc[detail.category].push(detail);
                return acc;
              }, {})
            ).map(([category, details]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-3">
                  {details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded border"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">
                          {getStatusIcon(detail.passed, detail.warning)}
                        </span>
                        <span className="font-medium text-gray-900">
                          {detail.check}
                        </span>
                      </div>
                      <div className={`text-sm ${getStatusColor(detail.passed, detail.warning)}`}>
                        {detail.message}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recomendaciones */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Recomendaciones</h3>
            <div className="space-y-3">
              {report.details
                .filter(detail => !detail.passed && !detail.warning)
                .slice(0, 5)
                .map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">🔧</span>
                    <div>
                      <div className="font-medium text-gray-900">{detail.check}</div>
                      <div className="text-sm text-gray-600">{detail.message}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Información Técnica */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">ℹ️ Información Técnica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">URL:</span> {report.url}
              </div>
              <div>
                <span className="font-medium">Fecha del Test:</span> {new Date(report.timestamp).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOReport;
