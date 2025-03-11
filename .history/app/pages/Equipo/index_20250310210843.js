{/* Segunda Sección (Oculta hasta hacer scroll) */}
<div ref={teamRef} className="w-[100%] justify-center mt-10 pb-20">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[
      { img: '/Assets/equipo/yo-franco.png', name: 'Franco L. Parera', role: 'Director & Programador. \n <span class=\"font-light normal-case\">Estudiante de la Lic en sistemas.\n Trabajó en Quento Snack, BioIngepro como Laboratorista. \n Aunque su sueño siempre fue tener su propia empresa y hacer los sueños de la gente realidad.</span>' },
      { img: '/Assets/equipo/joaco.jpg', name: 'Markitos Parera', role: 'Diseñador \n <span class=\"font-light normal-case\">Diseñador Automovilístico.</span>' },
      { img: '/Assets/equipo/joaco.jpg', name: 'Joaquin Lazara', role: 'Diseñador Gráfico \n <span class=\"font-light  normal-case\">Diseñador Automovilístico \n Estudiante en la UBA en la carrera de diseño gráfico.\n Apasionado por los autos de carrera, su mayor virtud es el diseño de los autos del TC.</span>' },
      { img: '/Assets/equipo/joaco.jpg', name: 'Tobias Y. Benitez', role: 'Desarrollador Fullstack \n <span class=\"font-light normal-case\">Estudiante en la UTN de Ing. Electrónica, cumple el rol de desarrollador Backend para nuestras apps.</span>' }
    ].map((member, index) => (
      <motion.div 
        key={index} 
        className="relative group w-full min-h-[400px] md:h-[500px] overflow-hidden mb-10"
      >
        <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:opacity-100 transition duration-300" />
        <div className="absolute inset-0 bg-purple-900/20 bg-opacity-30 flex flex-col items-center justify-center transition opacity-100 group-hover:opacity-0">
          <p className="text-black border border-white p-2 bg-white text-lg font-light">{member.name}</p>
        </div>
        <motion.div 
          initial={{ height: 0 }} 
          animate={{ height: '50%' }} 
          transition={{ duration: 0.5, ease: 'easeOut' }} 
          className="absolute bottom-0 w-full bg-violet-300 flex items-center justify-center opacity-0 group-hover:opacity-80"
        >
          <p className="text-black text-lg uppercase font-bold text-center whitespace-pre-line" dangerouslySetInnerHTML={{ __html: member.role }}></p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</div>
