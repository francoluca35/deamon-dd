// Error tracking y logging
class ErrorTracker {
  constructor() {
    this.errors = [];
    this.maxErrors = 50;
  }

  log(error, context = {}) {
    const errorData = {
      message: error.message || error,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
      context,
    };

    this.errors.push(errorData);

    // Mantener solo los últimos errores
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log en consola en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', errorData);
    }

    // Enviar a servicio de monitoreo en producción
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoring(errorData);
    }
  }

  sendToMonitoring(errorData) {
    // Aquí podrías integrar con servicios como Sentry, LogRocket, etc.
    // Por ahora, solo loggeamos
    console.error('Production error:', errorData);
  }

  getErrors() {
    return this.errors;
  }

  clearErrors() {
    this.errors = [];
  }
}

// Instancia global
export const errorTracker = new ErrorTracker();

// Hook para tracking de errores en React
export const useErrorTracking = () => {
  const trackError = (error, context = {}) => {
    errorTracker.log(error, context);
  };

  const trackAsyncError = async (asyncFn, context = {}) => {
    try {
      return await asyncFn();
    } catch (error) {
      errorTracker.log(error, context);
      throw error;
    }
  };

  return { trackError, trackAsyncError };
};

// Función para tracking de errores de formularios
export const trackFormError = (formName, fieldName, error) => {
  errorTracker.log(error, {
    type: 'form_error',
    formName,
    fieldName,
  });
};

// Función para tracking de errores de API
export const trackApiError = (endpoint, method, error) => {
  errorTracker.log(error, {
    type: 'api_error',
    endpoint,
    method,
  });
};
