const tarotCards = [
    {
        name: "El Loco",
        upright: "Nuevos comienzos, espontaneidad, aventura, libertad, inocencia, vivir el momento. Representa el comienzo de un viaje espiritual o físico, la fe en el universo y la capacidad de seguir la intuición.",
        inverted: "Imprudencia, irresponsabilidad, riesgo, falta de dirección, caos. Puede indicar temor al cambio o tomar decisiones sin considerar las consecuencias.",
        history: "El Loco es una de las cartas más antiguas del tarot, representando al bufón de la corte medieval. Simboliza la pureza del espíritu antes de embarcarse en el viaje de la vida. En algunas tradiciones, se asocia con el dios griego Dionisio, representando la libertad y el éxtasis.",
        symbolism: "El Loco lleva un pequeño fardo, simbolizando que lleva pocas posesiones materiales. El perro a sus pies representa la lealtad y protección. El acantilado sugiere el salto de fe necesario para comenzar nuevas aventuras. Su postura despreocupada muestra confianza en el camino.",
        positive: true,
        element: "Aire"
    },
    {
        name: 'El Mago',
        upright: 'Habilidad, destreza, concentración, acción, recursos, poder. Indica la capacidad de manifestar deseos a través de la voluntad y el enfoque. Representa el dominio sobre los elementos y la transformación de ideas en realidad.',
        inverted: 'Manipulación, engaño, poder mal utilizado, falta de preparación. Puede señalar talentos desperdiciados o el uso de habilidades para fines egoístas.',
        history: 'El Mago tiene sus raíces en el concepto del alquimista medieval, capaz de transformar la materia. En el tarot de Marsella, se le conocía como "Le Bateleur" (el charlatán). Su figura evolucionó para representar el poder creativo del ser humano.',
        symbolism: 'La mesa con los símbolos de los cuatro elementos (copas, espadas, bastos y oros) muestra su dominio sobre las fuerzas naturales. El infinito sobre su cabeza representa el poder ilimitado de la mente. Su postura activa indica que está listo para actuar.',
        positive: true,
        element: "Aire"
    },
    {
        name: "La Sacerdotisa",
        upright: "Intuición, misterio, subconsciente, sabiduría interior, secretos. Representa la conexión con lo divino femenino, los sueños y el conocimiento oculto. Sugiere confiar en la intuición más que en la lógica.",
        inverted: "Secretos ocultos, falta de intuición, ignorancia, superficialidad. Puede indicar el rechazo de la sabiduría interior o la negación de verdades importantes.",
        history: "La Sacerdotisa está inspirada en figuras como la Papisa Juana y las sacerdotisas de los templos antiguos. Representa el arquetipo de la mujer sabia, guardiana de misterios. En algunas tradiciones se asocia con la diosa Isis o con la luna.",
        symbolism: "Las columnas J y B (Jakin y Boaz) del Templo de Salomón representan el equilibrio entre opuestos. La media luna a sus pies simboliza la intuición. El libro en sus manos (a menudo medio oculto) representa el conocimiento esotérico.",
        positive: true,
        element: "Agua"
    },
    {
        name: "La Emperatriz",
        upright: "Fertilidad, naturaleza, feminidad, belleza, abundancia, sensualidad. Representa la creatividad, la maternidad y la conexión con la naturaleza. Es un símbolo de crecimiento y prosperidad en todos los aspectos de la vida.",
        inverted: "Dependencia, inmadurez, falta de crecimiento, esterilidad. Puede indicar problemas en relaciones o creatividad bloqueada. También puede señalar sobreprotección o manipulación emocional.",
        history: "La Emperatriz tiene sus raíces en las diosas madre de las antiguas religiones, como Deméter o Venus. En el tarot medieval, representaba a la mujer poderosa en la sociedad. Es el arquetipo de la madre nutricia y la creadora.",
        symbolism: "El campo de trigo representa abundancia y fertilidad. El escudo con el águila simboliza protección y visión elevada. El río detrás de ella muestra el flujo de emociones y creatividad. Su corona de estrellas la conecta con lo divino.",
        positive: true,
        element: "Tierra"
    },
    {
        name: "El Emperador",
        upright: "Autoridad, estructura, control, liderazgo, estabilidad, protección. Representa el poder establecido, la razón sobre la emoción y la capacidad de organizar. Es un símbolo de seguridad y orden en la vida.",
        inverted: "Tiranía, rigidez, dominación, abuso de poder, falta de disciplina. Puede indicar control excesivo o autoritarismo. También puede señalar falta de estructura o liderazgo débil.",
        history: "El Emperador está inspirado en figuras como Carlomagno y los gobernantes medievales. Representa el arquetipo del padre y la autoridad terrenal. En contraste con la Emperatriz, simboliza lo masculino estructurado frente a lo femenino fluido.",
        symbolism: "El trono con cabezas de carnero representa determinación y liderazgo. La mano que sostiene el orbe muestra su dominio sobre el mundo material. La armadura bajo su manto indica que está listo para defender su reino. Las montañas detrás simbolizan desafíos superados.",
        positive: true,
        element: "Fuego"
    },
    {
        name: "El Sumo Sacerdote",
        upright: "Tradición, conformidad, moralidad, ética, religión, creencias. Representa la sabiduría espiritual, el consejo sabio y las instituciones establecidas. Sugiere seguir normas sociales o buscar guía en sistemas probados.",
        inverted: "Rebelión, no conformidad, nuevas aproximaciones, ignorancia. Puede indicar dogmatismo excesivo o, por el contrario, rechazo de toda tradición. También puede señalar malos consejos o manipulación espiritual.",
        history: "El Sumo Sacerdote (antes llamado El Papa) representa las figuras religiosas como el Papa o los rabinos. Es el mediador entre lo divino y lo humano. En algunas tradiciones se asocia con el dios Júpiter o con el concepto de guru espiritual.",
        symbolism: "Las dos columnas representan la dualidad (como en La Sacerdotisa). Las llaves cruzadas a sus pies simbolizan el acceso al conocimiento espiritual. Los monjes arrodillados muestran sumisión a la tradición. Su gesto de bendición indica guía divina.",
        positive: true,
        element: "Tierra"
    },
    {
        name: 'Los Enamorados',
        upright: 'Amor, unión, relaciones, valores, elecciones, armonía. Representa conexiones profundas, decisiones importantes basadas en valores y la integración de opuestos. Puede indicar una relación significativa o una elección moral.',
        inverted: 'Desequilibrio, falta de armonía, conflictos, separación. Puede señalar relaciones problemáticas, indecisión o elecciones basadas en deseos superficiales. También puede indicar falta de compromiso.',
        history: 'Los Enamorados tienen sus raíces en el mito de Paris eligiendo entre las diosas, y en la tradición del "Juicio de Salomón". Representa el momento crucial de elección entre caminos. En algunas versiones muestra a Cupido sobre los amantes.',
        symbolism: 'El ángel (a veces Cupido) representa la bendición divina sobre la unión. La montaña detrás simboliza los desafíos superados. El árbol del conocimiento (a la derecha) y el árbol de la vida (izquierda) muestran la elección entre sabiduría y placer. La desnudez de los amantes representa pureza.',
        positive: true,
        element: "Aire"
    },
    {
        name: "El Carro",
        upright: "Determinación, voluntad, triunfo, autodisciplina, éxito. Representa el control sobre fuerzas opuestas, el progreso y la victoria a través del esfuerzo. Sugiere avanzar con confianza hacia los objetivos.",
        inverted: "Falta de control, falta de dirección, agresión, derrota. Puede indicar obstáculos en el camino o conflicto interno. También puede señalar ambición desmedida o arrogancia.",
        history: "El Carro está inspirado en los triunfos romanos y en carros ceremoniales de diversas culturas. Representa el dominio sobre los elementos y el propio destino. En algunas tradiciones se asocia con el dios Apolo y su carro solar.",
        symbolism: "Los dos esfinges (o caballos) representan fuerzas opuestas controladas. La armadura del conductor muestra protección en la batalla. La ciudad detrás simboliza la civilización conquistada. La corona de estrellas indica guía divina. Las ruedas cuadradas sugieren que el progreso requiere esfuerzo.",
        positive: true,
        element: "Agua"
    },
    {
        name: "La Justicia",
        upright: "Justicia, equidad, verdad, causa y efecto, ley, objetividad. Representa el karma, las consecuencias de las acciones y las decisiones equilibradas. Sugiere que cada acción tiene su reacción correspondiente.",
        inverted: "Injusticia, falta de responsabilidad, deshonestidad, parcialidad. Puede indicar tratos injustos o negarse a enfrentar las consecuencias de las acciones. También puede señalar autojuicio excesivo.",
        history: "La Justicia tiene sus raíces en figuras como la diosa Ma'at egipcia y la diosa Themis griega. Representa el equilibrio cósmico y las leyes universales. En el tarot medieval, era un recordatorio del juicio divino.",
        symbolism: "La espada representa el intelecto que corta hacia la verdad. La balanza muestra la necesidad de equilibrio. La corona indica autoridad moral. El manto rojo simboliza pasión controlada por la razón. El pie descubierto sugiere contacto con la realidad.",
        positive: true,
        element: "Aire"
    },
    {
        name: "El Ermitaño",
        upright: "Introspección, soledad, búsqueda, guía espiritual, sabiduría. Representa el viaje interior, la búsqueda de verdad y el alejamiento del mundo material. Sugiere un tiempo de reflexión y autoconocimiento.",
        inverted: "Soledad no deseada, aislamiento, rechazo de ayuda, ignorancia. Puede indicar miedo a la soledad o negarse a enfrentar verdades internas. También puede señalar exceso de introspección que lleva al estancamiento.",
        history: "El Ermitaño está inspirado en figuras como los monjes cristianos y los sabios solitarios de diversas tradiciones. Representa el arquetipo del viejo sabio que ha renunciado a las distracciones mundanas. En algunas versiones lleva un reloj de arena, simbolizando el tiempo.",
        symbolism: "La lámpara ilumina el camino, mostrando que la verdad interna guía. El bastón sugiere apoyo en el viaje espiritual. La montaña nevada representa los desafíos del camino hacia la iluminación. El manto gris simboliza neutralidad y alejamiento de extremos.",
        positive: true,
        element: "Tierra"
    },
    {
        name: 'La Rueda de la Fortuna',
        upright: 'Cambio, ciclos, movimiento, suerte, destino, oportunidades. Representa los altibajos de la vida y la naturaleza cíclica de la existencia. Sugiere que la fortuna puede cambiar, para bien o para mal, según los ciclos naturales.',
        inverted: 'Mala suerte, resistencia al cambio, falta de control, retroceso. Puede indicar obstáculos temporales o resistencia a cambios necesarios. También puede señalar que los ciclos están estancados.',
        history: 'La Rueda de la Fortuna tiene sus raíces en el concepto medieval de "Rota Fortunae", la diosa caprichosa que gira la rueda del destino. En algunas versiones incluye figuras subiendo y bajando de la rueda, representando los cambios de fortuna.',
        symbolism: 'La rueda con letras hebreas (TARO) muestra los ciclos del destino. Las figuras en los lados (a menudo un mono, un hombre, un león y un águila) representan las etapas de la vida. El esfinge en la parte superior simboliza el equilibrio en medio del cambio. Las nubes sugieren fuerzas divinas en movimiento.',
        positive: true,
        element: "Fuego"
    },
    {
        name: "La Fuerza",
        upright: "Fuerza interior, compasión, paciencia, control, coraje. Representa el dominio sobre los instintos a través de la suavidad, no la fuerza bruta. Sugiere enfrentar desafíos con confianza y autocontrol.",
        inverted: "Debilidad, inseguridad, falta de autodisciplina, fuerza bruta. Puede indicar miedo, duda o uso excesivo de la fuerza. También puede señalar abuso de poder o manipulación.",
        history: "La Fuerza está inspirada en mitos como Hércules y el león de Nemea, pero muestra un enfoque diferente: la fuerza suave. Representa el arquetipo de la domadora de bestias, que controla mediante comprensión más que por violencia. En algunas barajas se asocia con la virtud cristiana de la Fortaleza.",
        symbolism: "La mujer domando el león representa el control sobre las pasiones. La corona de flores muestra conexión con la naturaleza. El infinito sobre su cabeza indica fuerza espiritual ilimitada. La actitud serena sugiere confianza en lugar de agresión.",
        positive: true,
        element: "Fuego"
    },
    {
        name: 'El Colgado',
        upright: 'Sacrificio, perspectiva, rendición, nuevas visiones, suspensión. Representa el valor de ver las cosas desde otro ángulo y la sabiduría que viene con la entrega. Sugiere un período de espera o sacrificio por un bien mayor.',
        inverted: 'Estancamiento, falta de sacrificio, resistencia, egoísmo. Puede indicar miedo a cambiar de perspectiva o sacrificios inútiles. También puede señalar martirio o victimización.',
        history: 'El Colgado tiene raíces en el mito de Odín colgado del árbol Yggdrasil para obtener sabiduría. También refleja el concepto alquímico de "solve et coagula" (disolver y coagular). Representa la idea de que a veces hay que perder para ganar.',
        symbolism: 'La postura invertida muestra una nueva perspectiva. La cara tranquila indica aceptación. La pierna en forma de cruz simboliza sacrificio con propósito espiritual. La bolsas que caen sugieren dejar ir posesiones materiales. El fondo amarillo representa iluminación.',
        positive: false,
        element: "Agua"
    },
    {
        name: "La Muerte",
        upright: "Fin de ciclo, transición, cambio, transformación, dejar ir. Representa el final necesario para nuevos comienzos. Sugiere transformaciones profundas, no necesariamente físicas. Es un símbolo de cambio inevitable y liberación.",
        inverted: "Resistencia al cambio, estancamiento, miedo a lo desconocido. Puede indicar miedo a dejar ir o cambios forzados. También puede señalar transformaciones incompletas o negación de finales necesarios.",
        history: "La Muerte está inspirada en las danzas macabras medievales que recordaban la igualdad ante la muerte. Representa el arquetipo del transformador. En muchas culturas, la muerte no es un final sino un paso en el ciclo de vida-muerte-renacimiento.",
        symbolism: "El esqueleto cosechando con su guadaña muestra que la muerte es parte natural del ciclo. El sol naciente entre dos columnas simboliza renacimiento. Las figuras cayendo (rey, niño, mujer) representan que la muerte llega a todos. El barco en el fondo sugiere el viaje al más allá.",
        positive: false,
        element: "Agua"
    },
    {
        name: "La Templanza",
        upright: "Balance, moderación, paciencia, propósito, mezcla, sanación. Representa la armonía entre opuestos y la transformación alquímica. Sugiere encontrar el punto medio y combinar elementos dispares para crear algo nuevo.",
        inverted: "Desequilibrio, exceso, falta de armonía, impaciencia. Puede indicar extremos en el comportamiento o falta de propósito. También puede señalar mezclas que no funcionan o curación retrasada.",
        history: "La Templanza está inspirada en la virtud cristiana del mismo nombre y en los alquimistas mezclando sustancias. Representa el proceso de transformación espiritual. En algunas tradiciones se asocia con el arcángel Miguel equilibrando las fuerzas.",
        symbolism: "El ángel mezclando líquidos entre dos copas muestra la combinación de opuestos. El camino entre montañas sugiere el viaje hacia la iluminación. El iris en el fondo representa esperanza y conexión entre cielo y tierra. El pie en el agua y otro en tierra firme indican equilibrio.",
        positive: true,
        element: "Fuego"
    },
    {
        name: "El Diablo",
        upright: "Atadura, adicción, materialismo, lujuria, ignorancia. Representa las cadenas autoimpuestas, los deseos materiales y la sombra humana. Sugiere examinar qué nos mantiene atados y enfrentar nuestros demonios internos.",
        inverted: "Liberación, libertad, revelación, recuperar el control. Puede indicar romper cadenas o superar tentaciones. También puede señalar negación de aspectos oscuros o miedo a la libertad.",
        history: "El Diablo está inspirado en representaciones medievales de Satán, pero también en deidades como Pan o Baphomet. Representa el arquetipo de la sombra y los aspectos reprimidos. En algunas tradiciones es un recordatorio de los excesos materiales.",
        symbolism: "Las figuras encadenadas muestran esclavitud voluntaria (las cadenas están flojas). La antorcha invertida indica sabiduría mal utilizada. El pentagrama invertido representa lo material sobre lo espiritual. Los cuernos y alas de murciélago simbolizan la naturaleza dual del diablo como tentador y prisionero.",
        positive: false,
        element: "Tierra"
    },
    {
        name: 'La Torre',
        upright: 'Cambio repentino, revelación, caos, destrucción, despertar. Representa la caída de estructuras falsas y la liberación a través de crisis. Sugiere que a veces es necesario destruir para reconstruir de manera más sólida.',
        inverted: 'Evitar el desastre, miedo al cambio, resistencia, estancamiento. Puede indicar cambios postergados o negación de verdades dolorosas. También puede señalar crisis menores o advertencias ignoradas.',
        history: 'La Torre está inspirada en mitos como la Torre de Babel y castillos asediados. Representa el arquetipo de la caída del ego. En alquimia, simboliza la "nigredo" o etapa de putrefacción necesaria para la transformación.',
        symbolism: 'El rayo que destruye la torre representa la intervención divina. Las llamas muestran transformación a través del fuego purificador. Las figuras cayendo simbolizan la caída del ego. La corona que cae indica pérdida de falsa autoridad. La forma fálica de la torre sugiere orgullo herido.',
        positive: false,
        element: "Fuego"
    },
    {
        name: "La Estrella",
        upright: "Esperanza, fe, inspiración, optimismo, serenidad, sanación. Representa guía espiritual, conexión con lo divino y confianza en el universo. Sugiere un período de paz después de la tormenta y renovación espiritual.",
        inverted: "Desesperanza, falta de fe, pesimismo, desaliento. Puede indicar pérdida de dirección o conexión espiritual rota. También puede señalar expectativas poco realistas o negación de problemas.",
        history: "La Estrella está inspirada en la Estrella de Belén y en deidades estelares como Isis. Representa el arquetipo de la guía divina. En algunas tradiciones se asocia con la estrella polar, punto fijo en medio del caos.",
        symbolism: "La estrella central (a menudo de ocho puntas) representa guía divina. Las siete estrellas menores pueden ser los planetas clásicos o los chakras. El agua fluyendo muestra emociones purificadas. La mujer desnuda simboliza pureza y vulnerabilidad. El pájaro en el árbol sugiere renovación.",
        positive: true,
        element: "Aire"
    },
    {
        name: "La Luna",
        upright: "Ilusión, miedo, ansiedad, subconsciente, intuición, confusión. Representa el mundo de los sueños, lo inconsciente y las percepciones alteradas. Sugiere prestar atención a los mensajes del subconsciente y enfrentar miedos ocultos.",
        inverted: "Revelación, comprensión, claridad, superación de miedos. Puede indicar emerger de la confusión o enfrentar ilusiones. También puede señalar negación de la intuición o miedos exagerados.",
        history: "La Luna está inspirada en diosas lunares como Hécate y Selene. Representa el arquetipo del mundo onírico. En alquimia, simboliza la plata y el aspecto femenino de la psique. Su luz revela pero también distorsiona.",
        symbolism: "La luna llena con rostro muestra conciencia del subconsciente. Los dos pilares representan el acceso al mundo inconsciente. El cangrejo emergiendo del agua simboliza el surgimiento de contenidos reprimidos. Los perros aullando son guardianes del umbral. El camino serpenteante sugiere el viaje a través de lo desconocido.",
        positive: false,
        element: "Agua"
    },
    {
        name: "El Sol",
        upright: "Alegría, éxito, celebración, vitalidad, confianza, verdad. Representa la iluminación, la claridad y la energía vital. Sugiere un período de crecimiento, logros y expresión auténtica. Es un símbolo de conciencia despierta.",
        inverted: "Tristeza temporal, éxito demorado, falta de entusiasmo. Puede indicar optimismo excesivo o logros que no satisfacen. También puede señalar necesidad de descanso o energía bloqueada.",
        history: "El Sol está inspirado en deidades solares como Apolo y Ra. Representa el arquetipo del niño divino. En alquimia, simboliza el oro y la culminación de la obra. Es la luz que disipa las sombras de La Luna.",
        symbolism: "El sol radiante con rostro muestra conciencia iluminada. El niño desnudo representa pureza e inocencia. El muro detrás sugiere protección y estructura. Los girasoles mirando al sol simbolizan aspiración espiritual. El caballo blanco (en algunas versiones) representa energía vital pura.",
        positive: true,
        element: "Fuego"
    },
    {
        name: "El Juicio",
        upright: "Renacimiento, evaluación, despertar, absolución, llamado. Representa el momento de rendir cuentas, responder a un llamado superior y experimentar un despertar espiritual. Sugiere una evaluación honesta y transformación profunda.",
        inverted: "Miedo al cambio, culpa, falta de claridad, rechazo de llamada. Puede indicar negarse a enfrentar consecuencias o resistir una transformación necesaria. También puede señalar autojuicio excesivo.",
        history: "El Juicio está inspirado en el Juicio Final cristiano y en conceptos como el karma. Representa el arquetipo de la resurrección. En algunas tradiciones se asocia con el arcángel Gabriel tocando la trompeta del despertar.",
        symbolism: "El ángel tocando la trompeta representa el llamado divino. Las figuras emergiendo de las tumbas muestran renacimiento espiritual. Las montañas al fondo simbolizan elevación de conciencia. El mar sugiere el inconsciente colectivo. La cruz en la bandera indica sacrificio redentor.",
        positive: true,
        element: "Fuego"
    },
    {
        name: "El Mundo",
        upright: "Completitud, unidad, logro, viaje, integración, satisfacción. Representa la culminación exitosa de un ciclo, la totalidad y el equilibrio perfecto. Sugiere haber alcanzado un estado de plenitud y comprensión holística.",
        inverted: "Incompletitud, falta de cierre, falta de realización. Puede indicar metas no alcanzadas o sensación de estancamiento. También puede señalar necesidad de comenzar un nuevo ciclo.",
        history: "El Mundo está inspirado en representaciones del cosmos y deidades como Gaia. Representa el arquetipo del sí-mismo realizado. En alquimia, simboliza la piedra filosofal y la culminación de la gran obra. Es la meta del viaje del Loco.",
        symbolism: "La figura danzante (a veces andrógina) representa la unión de opuestos. La guirnalda ovalada simboliza el huevo cósmico. Los cuatro seres (hombre, águila, león, toro) son los evangelistas y los elementos. El fondo estrellado muestra conexión con el cosmos.",
        positive: true,
        element: "Tierra"
    }
];

/**
 * SISTEMA DE MAZOS DISPONIBLES
 */
const decks = {
    RiderWaite: {
        name: "Rider-Waite",
        author: "Pamela Colman Smith & A.E. Waite",
        year: 1909,
        style: "Clásico",
        description: "El mazo más popular con simbolismo rico y detallado."
    },
    MysticMondays: {
        name: "Mystic Mondays",
        author: "Grace Duong",
        year: 2017,
        style: "Moderno",
        description: "Diseño vibrante y contemporáneo con colores brillantes."
    },
    TarotDeLaFuerza: {
        name: "Tarot de la Fuerza",
        author: "María Carreño",
        year: 2015,
        style: "Español contemporáneo",
        description: "Interpretación moderna con enfoque en el empoderamiento personal."
    }
};

/**
 * VARIABLES GLOBALES MEJORADAS
 */
const state = {
    currentDeck: localStorage.getItem('currentDeck') || 'RiderWaite',
    readingHistory: JSON.parse(localStorage.getItem('readingHistory')) || [],
    userPreferences: JSON.parse(localStorage.getItem('userPreferences')) || {
        darkMode: false,
        animationSpeed: 'normal',
        defaultSpread: 'daily',
        language: 'es'
    },
    currentReading: null,
    threeCardsSpreadType: 'past-present-future',
    yesNoCardsCount: 1,
    adviceCardsCount: 1
};

/**
 * FUNCIONES DE INTERFAZ GLOBALES
 */
window.showSection = function(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
};

window.showReading = function(readingType) {
    document.querySelectorAll('.reading-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${readingType}-reading`).classList.add('active');
    
    document.querySelectorAll('.reading-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
};

window.selectDeck = function(deckId) {
    state.currentDeck = deckId;
    localStorage.setItem('currentDeck', deckId);
    
    document.querySelectorAll('.deck-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.closest('.deck-option').classList.add('selected');
};

window.setThreeCardsSpread = function(spreadType) {
    state.threeCardsSpreadType = spreadType;
    document.querySelectorAll('#three-cards-reading .spread-options button').forEach(opt => {
        opt.classList.remove('active');
    });
    event.target.classList.add('active');
};

window.setYesNoCardsCount = function(count) {
    state.yesNoCardsCount = count;
    document.querySelectorAll('#yes-no-reading .spread-options button').forEach(opt => {
        opt.classList.remove('active');
    });
    event.target.classList.add('active');
};

window.setAdviceCardsCount = function(count) {
    state.adviceCardsCount = count;
    document.querySelectorAll('#advice-reading .spread-options button').forEach(opt => {
        opt.classList.remove('active');
    });
    event.target.classList.add('active');
};

window.toggleDarkMode = function() {
    state.userPreferences.darkMode = !state.userPreferences.darkMode;
    document.body.classList.toggle('dark-mode', state.userPreferences.darkMode);
    localStorage.setItem('userPreferences', JSON.stringify(state.userPreferences));
};

window.invertDailyCard = function() {
    const cardImage = document.getElementById('dailyCardImage');
    cardImage.classList.toggle('inverted');
    
    const isInverted = cardImage.classList.contains('inverted');
    const cardId = state.currentReading.cards[0];
    const card = tarotCards[cardId];
    
    document.getElementById('dailyCardOrientation').textContent = isInverted ? 'Invertida' : 'Normal';
    document.getElementById('dailyCardMeaning').textContent = isInverted ? card.inverted : card.upright;
    
    // Actualizar el mensaje de energía basado en la orientación
    const energyMessage = isInverted ? 
        `Consejo para hoy: ${getAdviceForCard(card, true)}` : 
        `Consejo para hoy: ${getAdviceForCard(card, false)}`;
    document.getElementById('dailyEnergyMessage').textContent = energyMessage;
};

function getAdviceForCard(card, inverted) {
    if (inverted) {
        return `En su posición invertida, esta carta sugiere ${card.inverted.split('.')[0]}. Reflexiona sobre posibles bloqueos internos.`;
    }
    return `En su posición normal, esta carta sugiere ${card.upright.split('.')[0]}. Sigue esta energía durante tu día.`;
}

window.shareDailyOnWhatsApp = function() {
    const cardName = document.getElementById('dailyCardName').textContent;
    const cardMeaning = document.getElementById('dailyCardMeaning').textContent;
    const message = `Mi carta del día es: ${cardName} - ${cardMeaning.split('.')[0]}. Descubre la tuya en ${window.location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
};

window.shareDailyOnFacebook = function() {
    const cardName = document.getElementById('dailyCardName').textContent;
    const message = `Mi carta del día es: ${cardName}. Descubre la tuya en ${window.location.href}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(message)}`, '_blank');
};

window.shareDailyOnInstagram = function() {
    alert('Para compartir en Instagram, guarda la imagen de tu carta y compártela desde la app con el hashtag #TarotDelDia');
};

window.showDeckGallery = function(deckId) {
    state.currentDeck = deckId;
    localStorage.setItem('currentDeck', deckId);
    
    document.querySelectorAll('.deck-option').forEach(option => {
        option.classList.remove('selected');
    });
    event.target.closest('.deck-option').classList.add('selected');
    
    displayDeckGallery(deckId);
};

function displayDeckGallery(deckId) {
    const gallery = document.getElementById('cardGallery');
    gallery.innerHTML = '';
    
    tarotCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'gallery-card';
        cardElement.innerHTML = `
            <img src="cards/${deckId}/${index}.jpg" alt="${card.name}">
            <p>${card.name}</p>
        `;
        
        cardElement.addEventListener('click', () => showCardModal(index, deckId));
        gallery.appendChild(cardElement);
    });
}

window.showCardModal = function(cardId, deckId = null) {
    const deck = deckId || state.currentDeck;
    const card = tarotCards[cardId];
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="modal-card">
            <div class="modal-card-image">
                <img src="cards/${deck}/${cardId}.jpg" alt="${card.name}">
            </div>
            <div class="modal-card-info">
                <h3>${card.name}</h3>
                <div class="modal-card-section">
                    <h4>Significado Normal:</h4>
                    <p>${card.upright}</p>
                </div>
                <div class="modal-card-section">
                    <h4>Significado Invertido:</h4>
                    <p>${card.inverted}</p>
                </div>
                <div class="modal-card-section">
                    <h4>Historia y Simbolismo:</h4>
                    <p>${card.history}</p>
                    <p>${card.symbolism}</p>
                </div>
                <div class="modal-card-section">
                    <h4>Elemento:</h4>
                    <p>${card.element}</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('cardModal').style.display = 'block';
};

window.closeModal = function() {
    document.getElementById('cardModal').style.display = 'none';
};

/**
 * ALGORITMOS PARA SELECCIÓN DE CARTAS
 */
function selectCards(count, options = {}) {
    const {
        allowRepeats = false,
        specificCards = [],
        avoidCards = [],
        forceElements = []
    } = options;

    let availableCards = [];
    
    if (specificCards.length > 0) {
        availableCards = specificCards.filter(id => 
            id >= 0 && id < tarotCards.length && !avoidCards.includes(id)
        );
    } else {
        availableCards = Array.from({length: tarotCards.length}, (_, i) => i)
            .filter(id => !avoidCards.includes(id));
    }
    
    if (forceElements.length > 0) {
        availableCards = availableCards.filter(id => 
            forceElements.includes(tarotCards[id].element)
        );
    }
    
    if (availableCards.length === 0) {
        availableCards = Array.from({length: tarotCards.length}, (_, i) => i)
            .filter(id => !avoidCards.includes(id));
    }
    
    const selected = [];
    
    while (selected.length < count && availableCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const cardId = availableCards[randomIndex];
        
        selected.push(cardId);
        
        if (!allowRepeats) {
            availableCards.splice(randomIndex, 1);
        }
    }
    
    return selected;
}

function determineOrientations(cardIndices, spreadType) {
    return cardIndices.map(cardId => {
        const card = tarotCards[cardId];
        let invertedProbability = 0.3;
        
        switch(spreadType) {
            case 'love':
                if (card.element === "Agua") invertedProbability = 0.4;
                break;
            case 'yes-no':
                if (!card.positive) invertedProbability = 0.5;
                break;
            case 'advice':
                invertedProbability = 0.25;
                break;
            case 'daily':
                invertedProbability = 0.35;
                break;
        }
        
        switch(card.element) {
            case "Tierra": invertedProbability -= 0.05; break;
            case "Fuego": invertedProbability += 0.05; break;
            case "Agua": invertedProbability += 0.07; break;
        }
        
        invertedProbability = Math.max(0.1, Math.min(0.7, invertedProbability));
        
        return Math.random() < invertedProbability;
    });
}

/**
 * FUNCIONES PRINCIPALES DE LA APLICACIÓN
 */
window.drawDailyCard = function() {
    const cardId = selectCards(1)[0];
    const inverted = determineOrientations([cardId], 'daily')[0];
    
    state.currentReading = {
        type: 'daily',
        cards: [cardId],
        orientations: [inverted],
        date: new Date()
    };
    
    displayDailyCard(cardId, inverted);
    saveCurrentReading();
    playCardSound();
};

function displayDailyCard(cardId, inverted) {
    const card = tarotCards[cardId];
    const cardDisplay = document.getElementById('dailyCardDisplay');
    const cardImage = document.getElementById('dailyCardImage');
    
    cardImage.src = `cards/${state.currentDeck}/${cardId}.jpg`;
    cardImage.alt = card.name;
    cardImage.className = 'card-image card-drop';
    if (inverted) cardImage.classList.add('inverted');
    
    document.getElementById('dailyCardName').textContent = card.name;
    document.getElementById('dailyCardOrientation').textContent = inverted ? 'Invertida' : 'Normal';
    document.getElementById('dailyCardMeaning').textContent = inverted ? card.inverted : card.upright;
    document.getElementById('dailyCardHistory').textContent = card.history;
    document.getElementById('dailyCardSymbolism').textContent = card.symbolism;
    
    const energyMessage = inverted ? 
        `Consejo para hoy: ${getAdviceForCard(card, true)}` : 
        `Consejo para hoy: ${getAdviceForCard(card, false)}`;
    document.getElementById('dailyEnergyMessage').textContent = energyMessage;
    
    cardDisplay.style.display = 'block';
}

window.drawThreeCards = function() {
    const cardIds = selectCards(3);
    const orientations = determineOrientations(cardIds, 'three-cards');
    
    state.currentReading = {
        type: 'three-cards',
        spreadType: state.threeCardsSpreadType,
        cards: cardIds,
        orientations,
        date: new Date()
    };
    
    displayThreeCards(cardIds, orientations);
    saveCurrentReading();
    playCardSound();
};

function displayThreeCards(cardIds, orientations) {
    const container = document.getElementById('threeCardsDisplay');
    container.innerHTML = '';
    
    const positions = state.threeCardsSpreadType === 'past-present-future' ? 
        ['Pasado', 'Presente', 'Futuro'] : ['Situación', 'Obstáculo', 'Consejo'];
    
    cardIds.forEach((cardId, index) => {
        const card = tarotCards[cardId];
        const inverted = orientations[index];
        
        const cardElement = document.createElement('div');
        cardElement.className = 'spread-card';
        
        cardElement.innerHTML = `
            <div class="spread-card-position">${positions[index]}</div>
            <div class="spread-card-image-container">
                <img src="cards/${state.currentDeck}/${cardId}.jpg" 
                     alt="${card.name}" 
                     class="spread-card-image ${inverted ? 'inverted' : ''}">
            </div>
            <div class="spread-card-name">${card.name}</div>
            <div class="spread-card-orientation">${inverted ? 'Invertida' : 'Normal'}</div>
            <div class="spread-card-meaning">${inverted ? card.inverted : card.upright}</div>
        `;
        
        container.appendChild(cardElement);
    });
    
    document.getElementById('threeCardsResult').style.display = 'block';
    document.getElementById('threeCardsSummary').textContent = 
        generateGeneralInterpretation('three-cards', 
            cardIds.filter((id, i) => 
                orientations[i] ? !tarotCards[id].positive : tarotCards[id].positive
            ).length / cardIds.length, 
            cardIds.length
        );
}

window.drawYesNoCards = function() {
    const question = document.getElementById('yesNoQuestion').value.trim();
    if (!question) {
        alert('Por favor, escribe tu pregunta primero.');
        return;
    }
    
    const cardIds = selectCards(state.yesNoCardsCount);
    const orientations = determineOrientations(cardIds, 'yes-no');
    
    state.currentReading = {
        type: 'yes-no',
        question,
        cards: cardIds,
        orientations,
        date: new Date()
    };
    
    displayYesNoCards(cardIds, orientations, question);
    saveCurrentReading();
    playCardSound();
};

function displayYesNoCards(cardIds, orientations, question) {
    const container = document.getElementById('yesNoCardsDisplay');
    container.innerHTML = '';
    
    cardIds.forEach((cardId, index) => {
        const card = tarotCards[cardId];
        const inverted = orientations[index];
        
        const cardElement = document.createElement('div');
        cardElement.className = 'spread-card';
        
        cardElement.innerHTML = `
            <div class="spread-card-image-container">
                <img src="cards/${state.currentDeck}/${cardId}.jpg" 
                     alt="${card.name}" 
                     class="spread-card-image ${inverted ? 'inverted' : ''}">
            </div>
            <div class="spread-card-name">${card.name}</div>
            <div class="spread-card-orientation">${inverted ? 'Invertida' : 'Normal'}</div>
            <div class="spread-card-meaning">${inverted ? card.inverted : card.upright}</div>
        `;
        
        container.appendChild(cardElement);
    });
    
    const positiveCards = cardIds.filter((id, i) => 
        orientations[i] ? !tarotCards[id].positive : tarotCards[id].positive
    ).length;
    
    const totalCards = cardIds.length;
    const ratio = positiveCards / totalCards;
    
    document.getElementById('yesNoAnswer').textContent = getYesNoAnswer(ratio, totalCards);
    document.getElementById('yesNoExplanation').textContent = getYesNoQualifier(ratio);
    document.getElementById('yesNoResult').style.display = 'block';
}

window.drawAdviceCards = function() {
    const question = document.getElementById('adviceQuestion').value.trim();
    const cardIds = selectCards(state.adviceCardsCount);
    const orientations = determineOrientations(cardIds, 'advice');
    
    state.currentReading = {
        type: 'advice',
        question,
        cards: cardIds,
        orientations,
        date: new Date()
    };
    
    displayAdviceCards(cardIds, orientations, question);
    saveCurrentReading();
    playCardSound();
};

function displayAdviceCards(cardIds, orientations, question) {
    const container = document.getElementById('adviceCardsDisplay');
    container.innerHTML = '';
    
    cardIds.forEach((cardId, index) => {
        const card = tarotCards[cardId];
        const inverted = orientations[index];
        
        const cardElement = document.createElement('div');
        cardElement.className = 'spread-card';
        
        cardElement.innerHTML = `
            <div class="spread-card-image-container">
                <img src="cards/${state.currentDeck}/${cardId}.jpg" 
                     alt="${card.name}" 
                     class="spread-card-image ${inverted ? 'inverted' : ''}">
            </div>
            <div class="spread-card-name">${card.name}</div>
            <div class="spread-card-orientation">${inverted ? 'Invertida' : 'Normal'}</div>
            <div class="spread-card-meaning">${inverted ? card.inverted : card.upright}</div>
        `;
        
        container.appendChild(cardElement);
    });
    
    document.getElementById('adviceResult').style.display = 'block';
    document.getElementById('adviceSummary').textContent = generateGeneralInterpretation('advice', 
        cardIds.filter((id, i) => 
            orientations[i] ? !tarotCards[id].positive : tarotCards[id].positive
        ).length / cardIds.length, 
        cardIds.length
    );
}

window.drawLoveCards = function() {
    const question = document.getElementById('loveQuestion').value.trim();
    const cardIds = selectCards(3, { forceElements: ['Agua', 'Fuego'] });
    const orientations = determineOrientations(cardIds, 'love');
    
    state.currentReading = {
        type: 'love',
        question,
        cards: cardIds,
        orientations,
        date: new Date()
    };
    
    displayLoveCards(cardIds, orientations, question);
    saveCurrentReading();
    playCardSound();
};

function displayLoveCards(cardIds, orientations, question) {
    const container = document.getElementById('loveCardsDisplay');
    container.innerHTML = '';
    
    const positions = ['Tú', 'Tu pareja/relación', 'Consejo'];
    
    cardIds.forEach((cardId, index) => {
        const card = tarotCards[cardId];
        const inverted = orientations[index];
        
        const cardElement = document.createElement('div');
        cardElement.className = 'spread-card';
        
        cardElement.innerHTML = `
            <div class="spread-card-position">${positions[index]}</div>
            <div class="spread-card-image-container">
                <img src="cards/${state.currentDeck}/${cardId}.jpg" 
                     alt="${card.name}" 
                     class="spread-card-image ${inverted ? 'inverted' : ''}">
            </div>
            <div class="spread-card-name">${card.name}</div>
            <div class="spread-card-orientation">${inverted ? 'Invertida' : 'Normal'}</div>
            <div class="spread-card-meaning">${inverted ? card.inverted : card.upright}</div>
        `;
        
        container.appendChild(cardElement);
    });
    
    document.getElementById('loveResult').style.display = 'block';
    document.getElementById('loveSummary').textContent = generateGeneralInterpretation('love', 
        cardIds.filter((id, i) => 
            orientations[i] ? !tarotCards[id].positive : tarotCards[id].positive
        ).length / cardIds.length, 
        cardIds.length
    );
}

function saveCurrentReading() {
    if (!state.currentReading) return;
    
    state.readingHistory.unshift(state.currentReading);
    
    if (state.readingHistory.length > 50) {
        state.readingHistory.pop();
    }
    
    localStorage.setItem('readingHistory', JSON.stringify(state.readingHistory));
}

function playCardSound() {
    const audio = new Audio();
    audio.src = "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...";
    audio.volume = 0.3;
    audio.play().catch(e => console.log("No se pudo reproducir el sonido:", e));
}

/**
 * FUNCIONES DE APOYO
 */
function generateGeneralInterpretation(spreadType, balanceRatio, totalCards) {
    const balanceDescription = getBalanceDescription(balanceRatio);
    
    switch(spreadType) {
        case 'daily':
            return `Tu energía hoy está ${balanceDescription}. Esta carta ${getDailyFocusAdvice(balanceRatio)}`;
            
        case 'three-cards':
            const spreadName = state.threeCardsSpreadType === 'past-present-future' ? 
                "Pasado-Presente-Futuro" : "Situación-Obstáculo-Consejo";
            return `Tirada ${spreadName} muestra ${balanceDescription}. ${getThreeCardsAdvice(balanceRatio)}`;
            
        case 'love':
            return `Tu situación amorosa es ${balanceDescription}. ${getLoveAdvice(balanceRatio)}`;
            
        case 'yes-no':
            return `La respuesta es ${getYesNoAnswer(balanceRatio, totalCards)}. ${getYesNoQualifier(balanceRatio)}`;
            
        case 'advice':
            return `El consejo principal es: ${getAdviceFocus(balanceRatio)}`;
            
        default:
            return `La tirada muestra ${balanceDescription}`;
    }
}

function getBalanceDescription(ratio) {
    if (ratio >= 0.75) return "muy positiva";
    if (ratio >= 0.6) return "favorable";
    if (ratio >= 0.5) return "ligeramente positiva";
    if (ratio >= 0.4) return "ligeramente desafiante";
    if (ratio >= 0.25) return "desafiante";
    return "muy difícil";
}

function getDailyFocusAdvice(ratio) {
    if (ratio >= 0.7) return "indica un día propicio para avanzar en tus proyectos y confiar en tus instintos.";
    if (ratio >= 0.5) return "sugiere un día equilibrado donde pequeños esfuerzos pueden traer buenos resultados.";
    if (ratio >= 0.3) return "advierte sobre posibles desafíos, pero recuerda que cada obstáculo es una oportunidad de crecimiento.";
    return "señala un día que requerirá paciencia y adaptabilidad. Usa esta energía para reflexionar y planificar.";
}

function getThreeCardsAdvice(ratio) {
    if (ratio >= 0.7) return "El camino parece claro y favorable. Sigue adelante con confianza.";
    if (ratio >= 0.5) return "Hay más aspectos positivos que negativos. Mantén el equilibrio y sigue tu intuición.";
    if (ratio >= 0.3) return "Hay desafíos por delante, pero también oportunidades. Considera todas las perspectivas antes de actuar.";
    return "La situación es compleja. Tómate tu tiempo para analizar y no tomes decisiones apresuradas.";
}

function getLoveAdvice(ratio) {
    if (ratio >= 0.7) return "El amor fluye positivamente. Disfruta de esta energía y nutre tu relación.";
    if (ratio >= 0.5) return "Hay más armonía que conflicto. Comunica tus sentimientos con honestidad.";
    if (ratio >= 0.3) return "Puede haber desafíos emocionales. La paciencia y el diálogo serán clave.";
    return "Es momento de reflexión. Considera qué patrones podrían estar afectando tus relaciones.";
}

function getYesNoAnswer(ratio, totalCards) {
    if (totalCards === 1) {
        return ratio >= 0.5 ? "Sí" : "No";
    } else {
        if (ratio >= 0.7) return "Sí definitivamente";
        if (ratio >= 0.6) return "Sí";
        if (ratio >= 0.5) return "Sí, pero con consideraciones";
        if (ratio >= 0.4) return "No, pero hay esperanza";
        if (ratio >= 0.3) return "No";
        return "No definitivamente";
    }
}

function getYesNoQualifier(ratio) {
    if (ratio >= 0.8) return "Las cartas muestran un fuerte consenso positivo.";
    if (ratio >= 0.6) return "La mayoría de las cartas indican una respuesta positiva.";
    if (ratio >= 0.4) return "Las cartas están divididas, considera todos los aspectos.";
    if (ratio >= 0.2) return "La mayoría de las cartas sugieren precaución.";
    return "Las cartas muestran un fuerte consenso negativo.";
}

function getAdviceFocus(ratio) {
    if (ratio >= 0.7) return "Confía en tu camino actual. Estás alineado con energías positivas.";
    if (ratio >= 0.5) return "Sigue adelante, pero mantente atento a posibles ajustes necesarios.";
    if (ratio >= 0.3) return "Considera hacer cambios. Podría ser útil reevaluar tu enfoque.";
    return "Es momento de reflexión profunda. Considera cambiar de dirección o perspectiva.";
}

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Cargar preferencias
    if (state.userPreferences.darkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // Seleccionar el mazo actual en la interfaz
    document.querySelectorAll('.deck-option').forEach(option => {
        if (option.getAttribute('onclick').includes(`'${state.currentDeck}'`)) {
            option.classList.add('selected');
        }
    });
    
    // Mostrar la última lectura si existe
    if (state.readingHistory.length > 0) {
        const lastReading = state.readingHistory[0];
        switch(lastReading.type) {
            case 'daily':
                displayDailyCard(lastReading.cards[0], lastReading.orientations[0]);
                break;
            case 'three-cards':
                displayThreeCards(lastReading.cards, lastReading.orientations);
                break;
            case 'yes-no':
                displayYesNoCards(lastReading.cards, lastReading.orientations, lastReading.question);
                break;
            case 'advice':
                displayAdviceCards(lastReading.cards, lastReading.orientations, lastReading.question);
                break;
            case 'love':
                displayLoveCards(lastReading.cards, lastReading.orientations, lastReading.question);
                break;
        }
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('cardModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Inicializar la galería si estamos en esa sección
    if (document.getElementById('gallery').classList.contains('active')) {
        displayDeckGallery(state.currentDeck);
    }
});