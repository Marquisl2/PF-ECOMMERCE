const jsonProducts = [
    {
        "name": "Teclado Mecanico ASUS ROG Strix Scope TKL RGB Cherry Red", 
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31482_Teclado_Mecanico_ASUS_ROG_Strix_Scope_TKL_RGB_Cherry_Red_ac577937-grn.jpg",
        "price": "18500",
        "quantity": "4",
        "brand": "Asus",
        "description": "1er teclado",
        "calification": "0",
        "categories": ["Keyboards"]
    },
    {
        "name": "Teclado Mecanico HP HyperX Alloy Origins 60 HX Switch Aqua", 
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31469_Teclado_Mecanico_HP_HyperX_Alloy_Origins_60_HX_Switch_Aqua_d7ac3439-grn.jpg",
        "price": "9960",
        "quantity": "1",
        "brand": "Hp",
        "description": "2do teclado",
        "calification": "0",
        "categories": ["Keyboards"]
    },
    {
        "name": "Teclado Mecanico HP HyperX Alloy Origins 65 Switch Red", 
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31758_Teclado_Mecanico_HP_HyperX_Alloy_Origins_65_Switch_Red_0d348a5e-grn.jpg",
        "price": "9900",
        "quantity": "10",
        "brand": "Hp",
        "description": "3er teclado",
        "calification": "0",
        "categories": ["Keyboards"]
    },
    {
        "name": "Teclado Mecanico Glorious GMMK Compact RGB (Pre-Built) White",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31346_Teclado_Mecanico_Glorious_GMMK_Compact_RGB__Pre-Built__White_3f4279f8-grn.jpg",
        "price": "13000",
        "quantity": "22",
        "brand": "Glorious",
        "description": "4to teclado",
        "calification": "0",
        "categories": ["Keyboards"]
    },
    {
        "name": "Monitor Gamer ASUS ROG SWIFT 24' PG259QNR 360Hz 1Ms G-Sync",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30014_Monitor_Gamer_ASUS_ROG_SWIFT_24__PG259QNR_360Hz_1Ms_G-Sync_c37ea8f1-grn.jpg",
        "price": "180000",
        "quantity": "5",
        "brand": "UltraWide",
        "description": "1er monitor",
        "calification": "0",
        "categories": ["Monitors"]
    },
    {
        "name": "Monitor LG Curvo UltraWide 34' 34WL85C-B QHD IPS 21:9",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27446_Monitor_LG_Curvo_UltraWide_34__34WL85C-B__QHD_IPS_21_9_868148e1-grn.jpg",
        "price": "172000",
        "quantity": "1",
        "brand": "Asus",
        "description": "2do monitor",
        "calification": "0",
        "categories": ["Monitors"]
    },
    {
        "name": "Monitor Gamer Viewsonic 32' XG3220 4K UHD HDR10 FreeSync",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25532_Monitor_Gamer_Viewsonic_32__XG3220_4K_UHD_HDR10_FreeSync_c6623fb8-grn.jpg",
        "price": "130000",
        "quantity": "22",
        "brand": "Viewsonic",
        "description": "3er monitor",
        "calification": "0",
        "categories": ["Monitors"]
    },
    {
        "name": "Monitor Gamer LG 34' UltraGear 34GL750 Ultra Wide Curvo 144Hz 1ms",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17179_Monitor_Gamer_LG_34__UltraGear_34GL750_Ultra_Wide_Curvo_144Hz_1ms_2859a4b1-grn.jpg",
        "price": "141000",
        "quantity": "6",
        "brand": "Lg",
        "description": "4to monitor",
        "calification": "0",
        "categories": ["Monitors"]
    },
    {
        "name": "Mouse HP HyperX Pulsefire Haste Black-Red",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31458_Mouse_HP_HyperX_Pulsefire_Haste_Black-Red_1f5d0e1d-grn.jpg",
        "price": "8000",
        "quantity": "6",
        "brand": "Asus",
        "description": "1er mouse",
        "calification": "0",
        "categories": ["Mouses"]
    },
    {
        "name": "Mouse Redragon Griffin White M607W",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31371_Mouse_Redragon_Griffin_White_M607W__e64623f9-grn.jpg",
        "price": "1990",
        "quantity": "1",
        "brand": "Redragon",
        "description": "2do mouse",
        "calification": "0",
        "categories": ["Mouses"]
    },
    {
        "name": "Mouse MSI Clutch GM41 Lightweight",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31384_Mouse_MSI_Clutch_GM41_Lightweight_b770c392-grn.jpg",
        "price": "6010",
        "quantity": "4",
        "brand": "Msi",
        "description": "3er mouse",
        "calification": "0",
        "categories": ["Mouses"]
    },
    {
        "name": "Mouse ASUS ROG Strix Gladius III RGB Bluetooth Wireless 26.000DPI",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31096_Mouse_ASUS_ROG_Strix_Gladius_III_RGB_Bluetooth_Wireless_26.000DPI_1f4896da-grn.jpg",
        "price": "18420",
        "quantity": "6",
        "brand": "Asus",
        "description": "4to mouse",
        "calification": "0",
        "categories": ["Mouses"]
    },
        {
          "name": "Notebook Lenovo IdeaPad 15ITL6 arctic gray táctil 15.6\", Intel Core i5 1135G7 12GB de RAM 256GB SSD, Intel Iris Xe Graphics",
          "image": "https://http2.mlstatic.com/D_NQ_NP_645141-MLA48708038233_122021-V.webp",
          "price": "118999",
          "quantity": "10",
          "categories": [
            "Laptops"
          ],
          "brand": "Lenovo",
          "comments": null,
          "description": "La notebook Lenovo IdeaPad 3 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.\n\nPantalla con gran impacto visual\nSu pantalla LCD de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.\n\nPotente disco sólido\nEl disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel Iris Xe Graphics G7 80EUs convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.\n\nUna batería de larga duración\nLa batería de este equipo tiene una autonomía de alrededor de 12 horas. La duración varía según el uso, la configuración y otros factores, pero es ideal para quienes necesitan extender su jornada y seguir trabajando o estudiando con comodidad y sin cables.",
          "calification": "0"
        },
        {
          "name": "Notebook Banghó Max L4 i1 gris oscura 14\", Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 ",
          "image": "https://http2.mlstatic.com/D_NQ_NP_925102-MLA44939831146_022021-V.webp",
          "price": "46999",
          "quantity": "123",
          "categories": [
            "Laptops"
          ],
          "brand": "Banghó",
          "comments": null,
          "description": "La notebook Banghó Max L4 i1 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.\n\nPantalla con gran impacto visual\nSu pantalla LCD de 14\" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nCon su procesador Intel Celeron de 2 núcleos, lograrás el desempeño que necesitás para navegar y trabajar. Podrás usar los programas más esenciales, llevar a cabo tus tareas y organizar tu vida diaria.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel UHD Graphics 600 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
          "calification": "0"
        },
        {
          "name": "Notebook Dell Inspiron 3505 gris 15.6\", AMD Ryzen 5 3450U 16GB de RAM 1TB HDD 256GB SSD, AMD Radeon RX Vega 8 60 Hz 1366x768px",
          "image": "https://http2.mlstatic.com/D_NQ_NP_921052-MLA47215256520_082021-V.webp",
          "price": "134999",
          "quantity": "5",
          "categories": [
            "Laptops"
          ],
          "brand": "Dell",
          "comments": null,
          "description": "Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento.\n\nPantalla con gran impacto visual\nSu pantalla LED de 15.6\" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nSu procesador AMD Ryzen 5 de 4 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar.\n\nPotente disco sólido\nEl disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video AMD Radeon RX Vega 8 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
          "calification": "0"
        },
        {
          "name": "Notebook iQual Nq3x negra 14\", Intel Core i3 1005G1 8GB de RAM 1TB HDD, Intel UHD Graphics G1 1920x1080px Windows 10 Home",
          "image": "https://http2.mlstatic.com/D_NQ_NP_725815-MLA48010401031_102021-V.webp",
          "price": "84999",
          "quantity": "3",
          "categories": [
            "Laptops"
          ],
          "brand": "IQual",
          "comments": null,
          "description": "La notebook iQual Nq3x es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.\n\nPantalla con gran impacto visual\nSu pantalla LED de 14\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nSu procesador Intel Core i3 de 2 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. En base a esto, permite el desempeño necesario para la edición de fotografías o videos en programas básicos.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel UHD Graphics G1 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
          "calification": "0"
        },
        {
          "name": "Notebook Asus ZenBook UX425EA gris 14\", Intel Core i5 1135G7 8GB de RAM 512GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px ",
          "image": "https://http2.mlstatic.com/D_NQ_NP_622883-MLA48011304859_102021-V.webp",
          "price": "164872",
          "quantity": "3",
          "categories": [
            "Laptops"
          ],
          "brand": "Asus",
          "comments": null,
          "description": "Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ZenBook UX425EA. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.\n\nPantalla con gran impacto visual\nSu pantalla LCD de 14\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.\n\nPotente disco sólido\nEl disco sólido de 512 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel Iris Xe Graphics G7 80EUs convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.\n\nUna batería de extra larga duración\nLa batería de este equipo tiene una autonomía de alrededor de 21 horas, lo que la posiciona dentro del rango de computadoras con mayor autonomía del mercado. Es ideal para quienes necesitan poder seguir trabajando o estudiando mientras están desconectados.",
          "calification": "0"
        },
        {
          "name": "Notebook Dell Latitude 3190 11 Hd Intel Celeron N4120 4 Gb Ddr4-sdram 128 Gb Ssd Wi-fi 5 (802.11ac) Windows 10 Home Negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_822865-MLA47932613301_102021-V.webp",
          "price": "48699",
          "quantity": "5",
          "categories": [
            "Laptops"
          ],
          "brand": "Dell",
          "comments": null,
          "description": "Sobrevive al curso y a los alumnos\nOperativo incluso después del timbre de salida: con más de 14 horas de duración de la batería, este PC fiable ayuda a los alumnos a superar hasta los días de clase más largos. Además, mejorarán cualquier tarea con la ayuda de los procesadores Intel® Celeron de núcleo cuádruple, Pentium de núcleo cuádruple y memoria DDR4 (4 GB y 8 GB).\n\nDiseñado a prueba de niños: el Latitude 3190 incluye un teclado sellado y resistente a vertidos de líquidos que puede soportar derrames de 35cl además de una base de goma para una mayor duración, lo que le permite soportar una caída a una altura de 75cm. Construido para resistir a los golpes y caídas que suelen producirse en taquillas, mochilas y autobuses.\n\nConstrucción de colaboración: una bisagra de 180 grados hace que sea más fácil que nunca colaborar y compartir contenido de la pantalla.",
          "calification": "0"
        },
        {
          "name": "Notebook Samsung Chromebook XE310XBA plata 11.6\", Intel Celeron N4000 4GB de RAM 32GB SSD, Intel UHD Graphics 600 1366x768px",
          "image": "https://http2.mlstatic.com/D_NQ_NP_860605-MLA49211284992_022022-V.webp",
          "price": "35000",
          "quantity": "3",
          "categories": [
            "Laptops"
          ],
          "brand": "Samsung",
          "comments": null,
          "description": "La notebook Samsung Chromebook XE310XBA es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.\n\nPantalla con gran impacto visual\nSu pantalla LED de 11.6\" y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nCon su procesador Intel Celeron de 2 núcleos, lograrás el desempeño que necesitás para navegar y trabajar. Podrás usar los programas más esenciales, llevar a cabo tus tareas y organizar tu vida diaria.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel UHD Graphics 600 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.\n\nUna batería de larga duración\nLa batería de este equipo tiene una autonomía de alrededor de 12 horas. La duración varía según el uso, la configuración y otros factores, pero es ideal para quienes necesitan extender su jornada y seguir trabajando o estudiando con comodidad y sin cables.",
          "calification": "0"
        },
        {
          "name": "Notebook Asus X515EA slate gray 15.6\", Intel Core i5 1135G7 8GB de RAM 256GB SSD, Intel Iris Xe Graphics G7 80EUs 1920x1080px ",
          "image": "https://http2.mlstatic.com/D_NQ_NP_908593-MLA49420869607_032022-V.webp",
          "price": "107999",
          "quantity": "10",
          "categories": [
            "Laptops"
          ],
          "brand": "Asus",
          "comments": null,
          "description": "La notebook Asus X515EA es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.\n\nPantalla con gran impacto visual\nSu pantalla LCD de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.\n\nPotente disco sólido\nEl disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video Intel Iris Xe Graphics G7 80EUs convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
          "calification": "0"
        },
        {
          "name": "Monitor gamer iQual iQ24H led 23.6 \" negro 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_700635-MLA48049744185_102021-W.webp",
          "price": "24999",
          "quantity": "10",
          "categories": [
            "Monitors"
          ],
          "brand": "IQual",
          "comments": null,
          "description": "Disfrutá de todas las cualidades que el monitor iQual iQ24H tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.\n\nUn monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\n\nUna experiencia visual de calidad\nEste monitor de 23.6\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.",
          "calification": "0"
        },
        {
          "name": "Monitor gamer curvo Samsung F390 Series C24F390FH led 24 \" black high glossy 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_886158-MLA46737528644_072021-W.webp",
          "price": "32999",
          "quantity": "10",
          "categories": [
            "Monitors"
          ],
          "brand": "Samsung",
          "comments": null,
          "description": "Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.\n\nUn monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\n\nUna experiencia visual de calidad\nEste monitor de 24\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 4 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
          "calification": "0"
        },
        {
          "name": "Monitor Philips V 243V5LHSB LCD 23.6 \" negro 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_752391-MLA32196667557_092019-W.webp",
          "price": "25999",
          "quantity": "55",
          "categories": [
            "Monitors"
          ],
          "brand": "Philips",
          "comments": null,
          "description": "El compromiso que define a Philips es brindar a sus usuarios nuevas y evolucionadas tecnologías. Es por ello que cuida los detalles de cada uno de sus productos para hacer la diferencia. Gozá de una experiencia única con este monitor que te ofrece gran calidad e innovación en uno solo.\n\nUn monitor a tu medida\nGracias a su pantalla LCD vas a obtener gráficas con gran nitidez, colores vivos y atractivos.\n\nUna experiencia visual de calidad\nEste monitor de 23.6\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
          "calification": "0"
        },
        {
          "name": "Monitor gamer Gadnic G4D71N-F 27 \" negro 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_937525-MLA48131245812_112021-W.webp",
          "price": "35899",
          "quantity": "22",
          "categories": [
            "Monitors"
          ],
          "brand": "Gadnic",
          "comments": null,
          "description": "Disfrutá de todas las cualidades que el monitor Gadnic G4D71N-F tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.\n\nUna experiencia visual de calidad\nEste monitor de 27\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.",
          "calification": "0"
        },
        {
          "name": "Monitor gamer Redragon Jade GM3CS27 led 27 \" negro 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_897098-MLA45637359964_042021-W.webp",
          "price": "55999",
          "quantity": "4",
          "categories": [
            "Monitors"
          ],
          "brand": "Redragon",
          "comments": null,
          "description": "Disfrutá de todas las cualidades que el monitor Redragon GM3CS27 tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.\n\nUn monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\n\nUna experiencia visual de calidad\nEste monitor de 27\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.",
          "calification": "0"
        },
        {
          "name": "Monitor gamer ViewSonic XG2405 led 24 \" negro 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_631232-MLA46301236146_062021-W.webp",
          "price": "68990",
          "quantity": "10",
          "categories": [
            "Monitors"
          ],
          "brand": "ViewSonic",
          "comments": null,
          "description": "Disfrutá de todas las cualidades que el monitor ViewSonic XG2405 tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.\n\nUn monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\n\nUna experiencia visual de calidad\nEste monitor de 24\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido.",
          "calification": "0"
        },
        {
          "name": "Monitor gamer curvo Asus TUF Gaming VG24VQ led 23.6 \" negro 100V-240V",
          "image": "https://http2.mlstatic.com/D_NQ_NP_812033-MLA44490472301_012021-O.webp",
          "price": "65090",
          "quantity": "11",
          "categories": [
            "Monitors"
          ],
          "brand": "Asus",
          "comments": null,
          "description": "Apasionada de la tecnología e impulsada por la innovación, Asus se esfuerza por crear una vida mejor para todas las personas. Siempre en búsqueda de nuevas ideas, la empresa aspira a ofrecer la más alta calidad en cada uno de sus productos. Comprobalo por vos mismo con este monitor Asus que te brindará una experiencia auténtica e increíble.\n\nUn monitor a tu medida\nCon tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.\n\nUna experiencia visual de calidad\nEste monitor de 23.6\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
          "calification": "0"
        },
        {
          "name": "Mouse inalámbrico Logitech M280 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_918568-MLA32146214305_092019-V.webp",
          "price": "1000",
          "quantity": "10",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nSu diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 3 botones podrás tener mayor control e independencia para ejecutar.\n\nPlug And Play\nSolo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.\n\nTecnología inalámbrica\nTrabajá de forma inalámbrica y movete libremente sin ninguna interrupción. Al no haber cables, tu escritorio se mantiene despejado. Y además, podés llevar tu mouse fácilmente de un espacio de trabajo a otro.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse inalámbrico Logitech M170 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_744609-MLA32854739285_112019-V.webp",
          "price": "858",
          "quantity": "11",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nSu diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 3 botones podrás tener mayor control e independencia para ejecutar.\n\nPlug And Play\nSolo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.\n\nTecnología inalámbrica\nTrabajá de forma inalámbrica y movete libremente sin ninguna interrupción. Al no haber cables, tu escritorio se mantiene despejado. Y además, podés llevar tu mouse fácilmente de un espacio de trabajo a otro.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego inalámbrico recargable Yindiao A2 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_755532-MLA46389425748_062021-V.webp",
          "price": "1179",
          "quantity": "10",
          "categories": [
            "Mouses"
          ],
          "brand": "Yindiao",
          "comments": null,
          "description": "Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu Yindiao A2 encontrá eso que buscás en un solo aparato con la mejor tecnología.\n\nAdaptado a tus movimientos\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 4 botones podrás tener mayor control e independencia para ejecutar.\n\nPlug And Play\nSolo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.\n\nConexión en cuestión de segundos\nGracias a su tecnología Bluetooth tendrás la libertad para crear cuando quieras, donde quieras, en la computadora que elijas, con toda comodidad.\n\nMayor duración de la batería\nCon batería recargable incorporada que podés cargar fácilmente con el cable USB incluido sin necesidad de reemplazarla. Para prolongar la duración, usá el conmutador de encendido para apagar el mouse cuando no lo estés usando.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego Logitech G Series Lightsync G203 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_779763-MLA45385615296_032021-V.webp",
          "price": "3090",
          "quantity": "5",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 6 botones podrás tener mayor control e independencia para ejecutar.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego Logitech G Series Hero 16K G502 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_966913-MLA32149634914_092019-O.webp",
          "price": "3332",
          "quantity": "4",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 6 botones podrás tener mayor control e independencia para ejecutar.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego Logitech G Series Lightsync G203 blanco",
          "image": "https://http2.mlstatic.com/D_NQ_NP_775601-MLA45385615343_032021-O.webp",
          "price": "2966",
          "quantity": "8",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 6 botones podrás tener mayor control e independencia para ejecutar.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego Logitech G Series Lightsync G203 lila",
          "image": "https://http2.mlstatic.com/D_NQ_NP_746987-MLA45385615382_032021-V.webp",
          "price": "2966",
          "quantity": "19",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 6 botones podrás tener mayor control e independencia para ejecutar.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego Logitech G Series Hero G502 kda",
          "image": "https://http2.mlstatic.com/D_NQ_NP_903817-MLA47947792514_102021-V.webp",
          "price": "6999",
          "quantity": "11",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.\n\nAdaptado a tus movimientos\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.\n\nLa funcionalidad al alcance de tu mano\nEl sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.\n\nRapidez y confiabilidad de los botones\nCon sus 11 botones podrás tener mayor control e independencia para ejecutar.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Mouse de juego inalámbrico recargable Logitech G Series Lightspeed G502 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_943772-MLA40076329951_122019-V.webp",
          "price": "11249",
          "quantity": "3",
          "categories": [
            "Mouses"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Ahora puedes jugar con más rapidez y precisión con G502 LIGHTSPEED, dotado de conectividad inalámbrica superrápida de 1 ms. Un sensor HERO de próxima generación ofrece rendimiento de 16.000 dpi y eficiencia energética superiores, dándote hasta 60 horas de juego ininterrumpido. Once botones programables te ayudan a optimizar el juego con enlaces de teclas y macros personalizadas. Los botones principales tienen tensión de resorte metálico para una actuación rápida y precisa. Seis pesas personalizables te permiten configurar la sensación del ratón en la mano. RGB LIGHTSYNC proporciona ~16,8 millones de colores para crear un entorno de juego emocionante e inmersivo. El botón rueda para desplazamiento superrápido permite recorrer a toda velocidad menús y documentos largos. Empareja con POWERPLAY para disponer de carga infinita.",
          "calification": "0"
        },
        {
          "name": "Apple Magic Mouse 2 Plateado",
          "image": "https://http2.mlstatic.com/D_NQ_NP_856166-MLA46403910103_062021-O.webp",
          "price": "16999",
          "quantity": "11",
          "categories": [
            "Mouses"
          ],
          "brand": "Apple",
          "comments": null,
          "description": "El Magic Mouse 2 es totalmente recargable para que no tengas que usar las baterías tradicionales. Es más liviano, tiene menos piezas gracias a la batería integrada y a su base uniforme, y la parte inferior ha sido optimizada, por eso se mueve por tu escritorio con mayor fluidez y menos resistencia. Además, la superficie Multi-Touch te permite hacer gestos sencillos para pasar de una página web a otra y desplazarte por documentos. El Magic Mouse 2 está listo para usarse desde el primer día y se conecta a tu Mac de forma automática.\n\n\nAviso legal\n(*) El peso varía según la configuración y el proceso de fabricación.",
          "calification": "0"
        },
        {
          "name": "Mouse táctil inalámbrico Apple Magic A1296 blanco",
          "image": "https://http2.mlstatic.com/D_Q_NP_624987-MLA48881660084_012022-AB.webp",
          "price": "17199",
          "quantity": "33",
          "categories": [
            "Mouses"
          ],
          "brand": "Apple",
          "comments": null,
          "description": "Desde 1976 Apple trabaja por un mundo mejor. Todos sus productos están diseñados para reducir su impacto en el planeta y, al mismo tiempo, optimizar su rendimiento y resistencia. Sus mouses se caracterizan por un diseño ergonómico y un peso liviano que te posibilitan trasladarlo con facilidad. Podrás pasar de una página web a otra y desplazarte por tus documentos de un segundo al otro.\n\nAdaptado a tus movimientos\nEl mouse táctil es ligero, fino y flexible en sus movimientos. Asimismo, es resistente al entorno y soporta perfectamente el polvo y la humedad.\n\nLa funcionalidad al alcance de tu mano\nSu sensor láser te permitirá ser preciso y exacto en tus movimientos.\n\nPlug And Play\nSolo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.\n\nConexión en cuestión de segundos\nGracias a su tecnología Bluetooth tendrás la libertad para crear cuando quieras, donde quieras, en la computadora que elijas, con toda comodidad.\n\nApto para fácil traslado\nNavegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
          "calification": "0"
        },
        {
          "name": "Apple AirPods con estuche de carga - Blanco",
          "image": "https://http2.mlstatic.com/D_NQ_NP_816812-MLA46302470623_062021-V.webp",
          "price": "26499",
          "quantity": "5",
          "categories": [
            "Headsets"
          ],
          "brand": "Apple",
          "comments": null,
          "description": "Los AirPods te brindan una experiencia inalámbrica inigualable con un sonido de alta calidad, acceso a Siri (1) activado por voz y un estuche de carga que te ofrece más de 24 horas de reproducción de audio (2). Simplemente sácalos del estuche y estarán listos para funcionar con todos tus dispositivos (3). Póntelos y se conectarán al instante para que disfrutes un sonido rico en matices y de alta calidad. Pura magia.\n\n\nAvisos Legales\n(1) Siri puede no estar disponible en todos los idiomas y áreas, y las funcionalidades pueden variar según el área.\n(2) La duración de la batería varía según el uso y la configuración.\n(3) Requiere una cuenta de iCloud y macOS 11.1, iOS 14.3, iPadOS 14.3, watchOS 7.2 o tvOS 14.3 o posterior.",
          "calification": "0"
        },
        {
          "name": "Auriculares in-ear inalámbricos Soundpeats TrueFree 2 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_618305-MLA46705819840_072021-V.webp",
          "price": "5684",
          "quantity": "3",
          "categories": [
            "Headsets"
          ],
          "brand": "Soundpeats",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Soundpeats y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nAl ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.\n\nWireless al 100%\nA diferencia de otras conectividades, este dispositivo está fabricado con tecnología TWS (True Wireless Stereo). La misma permite una conexión inalámbrica total y funciona sin un solo cable entre pares. Con ella podrás disfrutar del entorno sonoro sin necesidad de estar pendiente de conexiones físicas.\n\nBluetooth de última generación\nCon la versión de bluetooth 5.0 tenés un montón de beneficios para aprovechar. En comparación a su antecesor BT 4.2, podrás obtener velocidades de transmisión de hasta 2.2 Mbps de datos y alcanzar una distancia máxima de 200 metros de conexión. Pero una de las novedades más sobresalientes es que con su modo dual tendrás la posibilidad de reproducir audio al mismo tiempo en dos dispositivos diferentes.",
          "calification": "0"
        },
        {
          "name": "Auriculares inalámbricos Sony WH-CH510 negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_933418-MLA40865317836_022020-V.webp",
          "price": "4999",
          "quantity": "11",
          "categories": [
            "Headsets"
          ],
          "brand": "Sony",
          "comments": null,
          "description": "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.\n\nEl formato perfecto para vos\nAl ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.\n\nBluetooth de última generación\nCon la versión de bluetooth 5.0 tenés un montón de beneficios para aprovechar. En comparación a su antecesor BT 4.2, podrás obtener velocidades de transmisión de hasta 2.2 Mbps de datos y alcanzar una distancia máxima de 200 metros de conexión. Pero una de las novedades más sobresalientes es que con su modo dual tendrás la posibilidad de reproducir audio al mismo tiempo en dos dispositivos diferentes.",
          "calification": "0"
        },
        {
          "name": "Auricular inalámbrico JBL Tune 510BT negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_785994-MLA46540771007_062021-V.webp",
          "price": "6499",
          "quantity": "33",
          "categories": [
            "Headsets"
          ],
          "brand": "JBL",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tu auricular JBL y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno.\n\nEl formato perfecto para vos\nAl ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.\n\nBluetooth de última generación\nCon la versión de bluetooth 5.0 tenés un montón de beneficios para aprovechar. En comparación a su antecesor BT 4.2, podrás obtener velocidades de transmisión de hasta 2.2 Mbps de datos y alcanzar una distancia máxima de 200 metros de conexión. Pero una de las novedades más sobresalientes es que con su modo dual tendrás la posibilidad de reproducir audio al mismo tiempo en dos dispositivos diferentes.",
          "calification": "0"
        },
        {
          "name": "Auriculares inalámbricos Sony WH-CH510 blanco",
          "image": "https://http2.mlstatic.com/D_NQ_NP_925455-MLA40865290886_022020-V.webp",
          "price": "4999",
          "quantity": "1",
          "categories": [
            "Headsets"
          ],
          "brand": "Sony",
          "comments": null,
          "description": "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.\n\nEl formato perfecto para vos\nAl ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.\n\nBluetooth de última generación\nCon la versión de bluetooth 5.0 tenés un montón de beneficios para aprovechar. En comparación a su antecesor BT 4.2, podrás obtener velocidades de transmisión de hasta 2.2 Mbps de datos y alcanzar una distancia máxima de 200 metros de conexión. Pero una de las novedades más sobresalientes es que con su modo dual tendrás la posibilidad de reproducir audio al mismo tiempo en dos dispositivos diferentes.",
          "calification": "0"
        },
        {
          "name": "Auriculares inalámbricos Soul S600 negro y gris",
          "image": "https://http2.mlstatic.com/D_NQ_NP_872807-MLA41256444589_032020-V.webp",
          "price": "2715",
          "quantity": "3",
          "categories": [
            "Headsets"
          ],
          "brand": "Soul",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Soul y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente",
          "image": "https://http2.mlstatic.com/D_NQ_NP_630172-MLA48751441285_012022-V.webp",
          "price": "10673",
          "quantity": "2",
          "categories": [
            "Headsets"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Auriculares inalámbricos Noga Aris NG-BT469 verde y negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_962972-MLA42763657387_072020-V.webp",
          "price": "1630",
          "quantity": "3",
          "categories": [
            "Headsets"
          ],
          "brand": "Noga",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Noga y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Auriculares Audio-Technica M-Series ATH-M40x negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_822527-MLA47583335665_092021-V.webp",
          "price": "25838",
          "quantity": "2",
          "categories": [
            "Headsets"
          ],
          "brand": "M40x",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Audio-Technica y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Auriculares inalámbricos JBL Tune 700BT negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_682266-MLA48751283465_012022-V.webp",
          "price": "12857",
          "quantity": "2",
          "categories": [
            "Headsets"
          ],
          "brand": "JBL",
          "comments": null,
          "description": "JBL, marca de renombre mundial en el mercado de audio, es desde hace más 70 años una referente por la alta calidad de sus productos. Su gama de auriculares es variada, ya que la compañía ofrece produtos in-ear, over-ear, on-ear, deportivos e inalámbricos. Cualquiera de estos es una buena opción para hacerte disfrutar de tu música preferida.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Auriculares JBL Tune 500 blanco",
          "image": "https://http2.mlstatic.com/D_NQ_NP_713231-MLA46346043203_062021-V.webp",
          "price": "3999",
          "quantity": "6",
          "categories": [
            "Headsets"
          ],
          "brand": "JBL",
          "comments": null,
          "description": "JBL, marca de renombre mundial en el mercado de audio, es desde hace más 70 años una referente por la alta calidad de sus productos. Su gama de auriculares es variada, ya que la compañía ofrece produtos in-ear, over-ear, on-ear, deportivos e inalámbricos. Cualquiera de estos es una buena opción para hacerte disfrutar de tu música preferida.\n\nEl formato perfecto para vos\nAl ser on-ear se apoyan en tus orejas cómodamente y ofrecen una gran calidad de sonido. Usalos en viajes largos o actividades al aire libre.",
          "calification": "0"
        },
        {
          "name": "Auriculares AKG K52 matte black",
          "image": "https://http2.mlstatic.com/D_NQ_NP_880229-MLA40185360474_122019-O.webp",
          "price": "8690",
          "quantity": "15",
          "categories": [
            "Headsets"
          ],
          "brand": "AKG",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares AKG y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Auriculares Sennheiser HD 206 plata",
          "image": "https://http2.mlstatic.com/D_NQ_NP_927934-MLA41255110706_032020-O.webp",
          "price": "9099",
          "quantity": "6",
          "categories": [
            "Headsets"
          ],
          "brand": "Senheiser",
          "comments": null,
          "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tus auriculares Sennheiser y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y de tus podcasts favoritos cuando quieras y donde quieras.\n\nEl formato perfecto para vos\nEl diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.",
          "calification": "0"
        },
        {
          "name": "Teclado gamer Redragon Kumara K552 QWERTY Outemu Red español latinoamérica color blanco con luz RGB",
          "image": "https://http2.mlstatic.com/D_NQ_NP_668104-MLA44207269301_112020-V.webp",
          "price": "6799",
          "quantity": "3",
          "categories": [
            "Keyboards"
          ],
          "brand": "Redragon",
          "comments": null,
          "description": "La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teclado bluetooth Logitech K380 QWERTY español color negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_758918-MLA46869090083_072021-V.webp",
          "price": "4549",
          "quantity": "33",
          "categories": [
            "Keyboards"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teeclado bluetooth Logitech K380 QWERTY español color blanco",
          "image": "https://http2.mlstatic.com/D_NQ_NP_893318-MLA46869134984_072021-V.webp",
          "price": "4197",
          "quantity": "3",
          "categories": [
            "Keyboards"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teclado gamer Redragon Dragonborn K630 QWERTY Redragon Brown inglés US color negro con luz RGB",
          "image": "https://http2.mlstatic.com/D_NQ_NP_745312-MLA46504064560_062021-V.webp",
          "price": "5428",
          "quantity": "33",
          "categories": [
            "Keyboards"
          ],
          "brand": "Redragon",
          "comments": null,
          "description": "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teclado inalámbrico Logitech K400 Plus QWERTY español color negro",
          "image": "https://http2.mlstatic.com/D_NQ_NP_614187-MLA32722390623_102019-V.webp",
          "price": "3190",
          "quantity": "35",
          "categories": [
            "Keyboards"
          ],
          "brand": "Logitech",
          "comments": null,
          "description": "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.\n\nFacilidad de manejo\nCon su touchpad incorporado podés controlar el cursor de manera sencilla y mantener una cómoda navegación en cualquier interfaz.",
          "calification": "0"
        },
        {
          "name": "Teclado gamer bluetooth Redragon Draconic K530 QWERTY Outemu Brown inglés US color blanco con luz RGB",
          "image": "https://http2.mlstatic.com/D_NQ_NP_975008-MLA46503943203_062021-V.webp",
          "price": "8399",
          "quantity": "33",
          "categories": [
            "Keyboards"
          ],
          "brand": "Redragon",
          "comments": null,
          "description": "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teclado gamer HyperX Alloy Origins QWERTY Blue español latinoamérica color negro con luz RGB",
          "image": "https://http2.mlstatic.com/D_NQ_NP_971560-MLA44007506285_112020-V.webp",
          "price": "12890",
          "quantity": "55",
          "categories": [
            "Keyboards"
          ],
          "brand": "HyperX",
          "comments": null,
          "description": "Este teclado HyperX de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teclado gamer Nisuta NSKBGZ61 QWERTY Outemu Red español España color rosa con luz RGB",
          "image": "https://http2.mlstatic.com/D_NQ_NP_771964-MLA44400701409_122020-V.webp",
          "price": "6819",
          "quantity": "66",
          "categories": [
            "Keyboards"
          ],
          "brand": "Nisuta",
          "comments": null,
          "description": "Teclado ideal para gamers profesionales! Este modelo de Nisuta se destaca por su valor económico en el mercado de teclados. Además, su ligereza y tamaño compacto lo vuelven un compañero único de juegos, fácil de transportar a cualquier lugar. A su vez, incluye doble entrada micro USB que permite conectividad con dispositivos compatibles.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
          "calification": "0"
        },
        {
          "name": "Teclado gamer Redragon Yama K550 QWERTY Outemu Purple español latinoamérica color blanco con luz RGB",
          "image": "https://http2.mlstatic.com/D_NQ_NP_761568-MLA46504064235_062021-O.webp",
          "price": "8949",
          "quantity": "33",
          "categories": [
            "Keyboards"
          ],
          "brand": "Redragon",
          "comments": null,
          "description": "Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\n\nDistinción a todo color\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.\n\nTecnología antighosting\nEste dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
          "calification": "0"
        },
        {
          "name": "Lenovo Legion Prueba Demo",
          "image": "https://http2.mlstatic.com/D_NQ_NP_828478-MLA47861843287_102021-V.webp",
          "price": "100000",
          "quantity": "10",
          "categories": [
            "Laptops"
          ],
          "brand": "Lenovo",
          "comments": null,
          "description": "La notebook MSI Thin GF63 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.\n\nPantalla con gran impacto visual\nSu pantalla LED de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n\nEficiencia a tu alcance\nSu procesador Intel Core i5 de 4 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. Con esta unidad central, la máquina llevará a cabo varios procesos de forma simultánea, desde edición de videos hasta retoques fotográficos con programas profesionales.\n\nPotente disco sólido\nEl disco sólido de 256 GB hace que el equipo funcione a gran velocidad y por lo tanto te brinda mayor agilidad para operar con diversos programas.\n\nUn procesador exclusivo para los gráficos\nSu placa de video NVIDIA GeForce GTX 1650 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
          "calification": "0"
        }
        ,
        {
          "x":100,
          "name":'Procesador AMD Ryzen 5 1600 AF Zen+ 12nm AM4 Wraith Stealth Cooler',
          "price": 36000,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17898_Procesador_AMD_Ryzen_5_1600_AF_Zen__12nm_AM4_Wraith_Stealth_Cooler_187bb9ab-grn.jpg',
          "description":'Modelo Ryzen 5 1600 AF, Socket AM4 Ryzen 2th Gen, Núcleos 6,Frecuencia 3200.00 mhz, Proceso De Fabricación 12 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 12, Frecuencia Turbo 3600 mhz, Familia AMD RYZEN 5',
          "categories":["Processor"],
          "quantity":10,
          "brand":'AMD',
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":101,
          "name":'Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler',
          "price": 82400,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22300_Procesador_AMD_Ryzen_7_5800X_4.7GHz_Turbo_AM4_-_No_incluye_Cooler_05ce1332-grn.jpg',
          "description":'Modelo 5800X, Socket AM4 Ryzen 4th Gen, Núcleos 8, Frecuencia 3800.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 16, Frecuencia Turbo 4700 mhz, Familia AMD RYZEN 7',
          "categories":["Processor"],
          "quantity":6,
          "brand":'AMD',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":102,
          "name":'Procesador AMD Ryzen 9 5900X 4.8GHz Turbo AM4 - No incluye Cooler',
          "price": 115250,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22431_Procesador_AMD_Ryzen_9_5900X_4.8GHz_Turbo_AM4_-_No_incluye_Cooler_1d9bab51-grn.jpg',
          "description":'Modelo 5900X, Socket AM4 Ryzen 4th Gen, Núcleos 12, Frecuencia 3700.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 24, Frecuencia Turbo 4800 mhz, Familia AMD RYZEN 9',
          "categories":["Processor"],
          "quantity":8,
          "brand":'AMD',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":200,
          "name":'Mother Asrock A320M-HDV R4.0 Ryzen M-ATX',
          "price": 10350,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32094_Mother_Asrock_A320M-HDV_R4.0_Ryzen_M-ATX_d232d007-grn.jpg',
          "description":'Socket AM4 A-Series,AM4 APU 1th Gen,AM4 APU 2th Gen,AM4 Ryzen 1th Gen,AM4 Ryzen 2th Gen,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen, Chipsets Principal AMD A320, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 CH HD Audio (Realtek ALC887 Audio Codec) ',
          "categories":["Mother"],
          "quantity":4,
          "brand":'Asrock',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":201,
          "name":'Mother ASUS PRIME A520M-K AM4',
          "price": 14820,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20551_Mother_ASUS_PRIME_A520M-K_AM4_f5d89e00-grn.jpg',
          "description":'Socket AM4 Ryzen 3th Gen,AM4 APU 3th Gen,AM4 Ryzen 4th Gen,AM4 APU 5000, Chipsets Principal AMD A520, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 1, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 Realtek ALC 887',
          "categories":["Mother"],
          "quantity":5,
          "brand":'Asus',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":202,
          "name":'Mother ASUS TUF GAMING B550-PLUS WIFI II AM4',
          "price": 40000,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31541_Mother_ASUS_TUF_GAMING_B550-PLUS_WIFI_II_AM4_d701fd66-grn.jpg',
          "description":'Socket AM4 APU 3th Gen,AM4 APU 5000,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen, Chipsets Principal AMD B550, Boton Bios Flashback Si, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 105, Placa De Sonido 7.1 Realtek ALC 1200',
          "categories":["Mother"],
          "quantity":3,
          "brand":'Asus',
          
          "compatible": 'AMD',
          
          }
          ,
          
          {
          "x":300,
          "name":'Placa de Video Asrock RX 570 8GB GDDR5 Phantom Gaming Elite',
          "price": 53050,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28822_Placa_de_Video_Asrock_RX_570_8GB_GDDR5_Phantom_Gaming_Elite_9ecf3ec5-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RX 570, Entrada Video No, Puente Para Sli/croosfirex Crossfire, Doble Puente No, Velocidad Memoria 7000 mhz, Tipo De Memoria GDDR5, Capacidad De Memoria 8 gb, Interface De Memoria 256 bits, Velocidad Del Core Turbo 1270 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2048',
          "categories":["VGA"],
          "quantity":9,
          "brand":'AMD',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":301,
          "name":'Placa de Video Asrock Radeon RX 5600 XT 6GB GDDR6 Phantom Gaming D2 OC 14 Gbps',
          "price": 91400,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17383_Placa_de_Video_Asrock_Radeon_RX_5600_XT_6GB_GDDR6_Phantom_Gaming_D2_OC_14_Gbps_5fe49047-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RXT 5600, Entrada Video No, Puente Para Sli/croosfirex Crossfire, Doble Puente No, Velocidad Del Core Base 1420 mhz, Velocidad Memoria 12000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 6 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1750 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2304',
          "categories":["VGA"],
          "quantity":7,
          "brand":'AMD',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":302,
          "name":'Placa de Video Asrock Radeon RX 6800 XT 16GB GDDR6 TAICHI OC X',
          "price": 282290,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24238_Placa_de_Video_Asrock_Radeon_RX_6800_XT_16GB_GDDR6_TAICHI_OC_X_22e343de-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RX 6800 XT, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing, Velocidad Memoria 16000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 16 gb, Interface De Memoria 256 bits, Velocidad Del Core Turbo 2360 mhz, Tipos De Procesos Stream, Cantidad De Procesos 4608',
          "categories":["VGA"],
          "quantity":9,
          "brand":'AMD',
          
          "compatible": 'AMD',
          
          }
          ,
          {
          "x":400,
          "name":'Procesador Intel Core i3 10100F 4.3GHz Turbo 1200 Comet Lake',
          "price": 15050,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23223_Procesador_Intel_Core_i3_10100F_4.3GHz_Turbo_1200_Comet_Lake_6ea64940-grn.jpg',
          "description":'Modelo 10100F, Socket 1200 Comet Lake, Núcleos 4, Frecuencia 3600.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 8, Frecuencia Turbo 4300 mhz, Familia Intel Core i3',
          "categories":["Processor"],
          "quantity":4,
          "brand":'Intel',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":401,
          "name":'Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake',
          "price": 34400,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18901_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_198a8076-grn.jpg',
          "description":'Modelo Core i5 10400F, Socket 1200 Comet Lake, Núcleos 6, Frecuencia 2900.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 12, Frecuencia Turbo 4300 mhz, Familia Intel Core i5',
          "categories":["Processor"],
          "quantity":9,
          "brand":'Intel',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":402,
          "name":'Procesador Intel Core i7 10700F 4.8GHz Turbo Socket 1200 Comet Lake',
          "price": 57250,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22505_Procesador_Intel_Core_i7_10700F_4.8GHz_Turbo_Socket_1200_Comet_Lake_609ce7c6-grn.jpg',
          "description":'Modelo 10700F, Socket 1200 Comet Lake, Núcleos 8, Frecuencia 2900.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 16, Frecuencia Turbo 4800 mhz, Familia Intel Core i7',
          "categories":["Processor"],
          "quantity":10,
          "brand":'Intel',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":500,
          "name":'Mother Gigabyte B560M DS3H V2',
          "price": 15690,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33799_Mother_Gigabyte_B560M_DS3H_V2_f079c003-grn.jpg',
          "description":'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel B560, Boton Bios Flashback No, Watts Máximos Para Cpu 125, Placa De Sonido 7.1 Realtek ALC 897, Sistema De Conexión Rgb ARGB Header,RGB Header',
          "categories":["Mother"],
          "quantity":6,
          "brand":'Gigabyte',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":501,
          "name":'Mother ASUS PRIME B560M-A S1200 11th Gen PCIe 4.0 ',
          "price": 21200,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28077_Mother_ASUS_PRIME_B560M-A_S1200_11th_Gen_PCIe_4.0_efdc4908-grn.jpg',
          "description":'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel B560, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 235, Placa De Sonido 7.1 Realtek ALC 897',
          "categories":["Mother"],
          "quantity":7,
          "brand":'Asus',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":502,
          "name":'Mother Gigabyte Z590M GAMING X s12005',
          "price": 30200,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27159_Mother_Gigabyte_Z590M_GAMING_X_s12005_ab1686f9-grn.jpg',
          "description":'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel Z590, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 125, Placa De Sonido 7.1 Realtek ALC 897',
          "categories":["Mother"],
          "quantity":4,
          "brand":'Gigabyte',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":600,
          "name":'Placa de Video ASUS GeForce GTX 1660 TI 6GB GDDR6 TUF EVO OC',
          "price": 77040,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_28866_Placa_de_Video_ASUS_GeForce_GTX_1660_TI_6GB_GDDR6_TUF_EVO_OC_c3ef28a0-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu GTX 1660 Ti, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Velocidad Memoria 14000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 6 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1845 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 1536',
          "categories":["VGA"],
          "quantity":9,
          "brand":'GeForce',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":601,
          "name":'Placa de Video ASUS GeForce RTX 3060 12GB GDDR6 ROG STRIX GAMING OC V2 LHR',
          "price": 115350,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27889_Placa_de_Video_ASUS_GeForce_RTX_3060_12GB_GDDR6_ROG_STRIX__GAMING_OC_V2_LHR_75854af0-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RTX 3060, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing + DLSS, Velocidad Memoria 15000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 12 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1912 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 3584',
          "categories":["VGA"],
          "quantity":2,
          "brand":'GeForce',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":602,
          "name":'Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X TUF GAMING OC',
          "price": 299900,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27836_Placa_de_Video_ASUS_GeForce_RTX_3090_24GB_GDDR6X_TUF_GAMING_OC_c5a7da31-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RTX 3090, Entrada Video No, Puente Para Sli/croosfirex SLI, Doble Puente No, Características Especiales, Ray Tracing + DLSS, Velocidad Memoria 19500 mhz, Tipo De Memoria GDDR6X, Capacidad De Memoria 24 gb, Interface De Memoria 384 bits, Velocidad Del Core Turbo 1770 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 10496',
          "categories":["VGA"],
          "quantity":3,
          "brand":'GeForce',
          
          "compatible": 'Intel',
          
          }
          ,
          {
          "x":700,
          "name":'Memoria OLOy DDR4 16GB 3000MHz Owl Red CL16',
          "price": 13902,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22283_Memoria_OLOy_DDR4_16GB_3000MHz_Owl_Red_CL16_afce20e5-grn.jpg',
          "description":'Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v',
          "categories":["Memory"],
          "quantity":9,
          "brand":'OLOy',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":701,
          "name":'Memoria Patriot Viper DDR4 8GB 3200MHz Steel',
          "price": 7850,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18964_Memoria_Patriot_Viper_DDR4_8GB_3200MHz_Steel_72af2fec-grn.jpg',
          "description":'Capacidad 8 gb, Velocidad 3200 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v',
          "categories":["Memory"],
          "quantity":6,
          "brand":'Viper',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":702,
          "name":'Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black',
          "price": 15950,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg',
          "description":'Capacidad 16 gb, Velocidad 3000 mhz, Tipo DDR4, Cantidad De Memorias 1, Latencia 16 cl, Voltaje 1.35 v',
          "categories":["Memory"],
          "quantity":7,
          "brand":'GeiL',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":800,
          "name":'Disco Rígido WD 2TB BLACK 64MB SATA 6.0GB/s',
          "price": 19999,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_3183_Disco_R__gido_WD_2TB_BLACK_64MB_SATA_6.0GB_s__719de448-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 35 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 2000 gb',
          "categories":["Disk"],
          "quantity":10,
          "brand":'WD',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":801,
          "name":'Disco Rígido WD 1TB BLUE 64MB SATA 6.0GB/s',
          "price": 8450,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9018_Disco_R__gido_WD_1TB_BLUE_64MB_SATA_6.0GB_s__ca74d162-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 30 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 1000 gb',
          "categories":["Disk"],
          "quantity":10,
          "brand":'WD',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":802,
          "name":'Disco Rígido Seagate 1TB Barracuda 64MB SATA 6GB/s',
          "price": 8450,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_9847_Disco_R__gido_Seagate_1TB_Barracuda_64MB_SATA_6GB_s_b2f27e5a-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 30 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 7200 rpm, Velocidad De Interface 6.0, Capacidad 1000 gb',
          "categories":["Disk"],
          "quantity":10,
          "brand":'Seagate',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":803,
          "name":'Disco Solido SSD KingDian 120GB S280 500Mb/s',
          "price": 3550,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33234_Disco_Solido_SSD_KingDian_120GB_S280_500Mb_s_c98f29db-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 3 w, Tipo De Disco Solido, Memoria Cache 128 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 120 gb',
          "categories":["Disk"],
          "quantity":19,
          "brand":'KingDian',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":804,
          "name":'Disco Solido SSD Team 256GB GX2 530MB/s',
          "price": 4522,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33801_Disco_Solido_SSD_Team_256GB_GX2_530MB_s_7d116a15-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 4 w, Tipo De Disco Solido, Memoria Cache 128 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 256 gb',
          "categories":["Disk"],
          "quantity":13,
          "brand":'Team',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":805,
          "name":'Disco Solido SSD Patriot 512GB P210 520Mb/s 2.5 ',
          "price": 8586,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30462_Disco_Solido_SSD_Patriot_512GB_P210_520Mb_s_2.5_d1f3e4f8-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 5 w, Tipo De Disco Solido, Memoria Cache 520 mb, Velocidad De Rotación 0 rpm, Velocidad De Interface 0.0, Capacidad 512 gb',
          "categories":["Disk"],
          "quantity":15,
          "brand":'Patriot',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":900,
          "name":'Fuente ASUS TUF 550B 80 Plus Bronze 550W',
          "price": 15530,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23310_Fuente_ASUS_TUF_550B_80_Plus_Bronze_550W_cfcb396e-grn.jpg',
          "description":'Watts Nominal 550 w, Watts Reales 540 w, Formato ATX, "compatible" Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Bronze, Modo Híbrido No, Tipo De Cableado Cables fijos, Ampers En Linea +12V 45 a, Fuente Digital No, Color Negro',
          "categories":["Fuente"],
          "quantity":3,
          "brand":'Asus',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":901,
          "name":'Fuente Gamemax 1050W 80 Plus Silver Modular GP-1050',
          "price": 33400,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12323_Fuente_Gamemax_1050W_80_Plus_Silver_Modular_GP-1050_f043de89-grn.jpg',
          "description":'Watts Nominal 1050 w, Watts Reales 912 w, Formato ATX, "compatible" Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Silver, Modo Híbrido No, Tipo De Cableado Semi Modular, Ampers En Linea +12V 76 a, Fuente Digital No, Color Negro, Iluminación Del Cooler Verder',
          "categories":["Fuente"],
          "quantity":2,
          "brand":'Gamemax',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":902,
          "name":'Fuente ASUS ROG STRIX 1000G 80 Plus Gold Full Modular 1000W',
          "price": 41399,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33006_Fuente_ASUS_ROG_STRIX_1000G_80_Plus_Gold_Full_Modular_1000W_8c2a799c-grn.jpg',
          "description":'Watts Nominal 1000 w, Watts Reales 996 w, Formato ATX, "compatible" Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Gold, Modo Híbrido Si, Tipo De Cableado Full Modular, Ampers En Linea +12V 83 a, Fuente Digital No, Color Negro',
          "categories":["Fuente"],
          "quantity":3,
          "brand":'Asus',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":1000,
          "name":'Gabinete Aerocool Klaw Black ARGB Vidrio Templado ATX',
          "price": 16900,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13520_Gabinete_Aerocool_Klaw_Black_ARGB_Vidrio_Templado_ATX_9f55b6a2-grn.jpg',
          "description":'Factor Mother ITX,ATX,M-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Negro, Ancho 228 mm, Alto 445 mm, Profundidad 461 mm, Largo Máximo Vga 370 mm, Altura Máxima Del Cooler Cpu 164.00 mm',
          "categories":["Gabinete"],
          "quantity":7,
          "brand":'Aerocool',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":1001,
          "name":'Gabinete ASUS TUF GT501 Vidrio Templado White 3x120mm ARGB',
          "price": 39300,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24591_Gabinete_ASUS_TUF_GT501_Vidrio_Templado_White_3x120mm_ARGB_608fa40d-grn.jpg',
          "description":'Factor Mother ITX,M-ATX,ATX,E-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Blanco, Ancho 251 mm, Alto 552 mm, Profundidad 545 mm, Largo Máximo Vga 420 mm, Altura Máxima Del Cooler Cpu 180.00 mm',
          "categories":["Gabinete"],
          "quantity":6,
          "brand":'Asus',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":1002,
          "name":'Gabinete Cooler Master COSMOS C700M ARGB E-ATX',
          "price": 126200,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_15982_Gabinete_Cooler_Master_COSMOS_C700M_ARGB_E-ATX_14e3e773-grn.jpg',
          "description":'Factor Mother ITX,ATX,E-ATX,M-ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Vidrio templado, Colores Negro,Gris, Ancho 306 mm, Alto 651 mm, Profundidad 650 mm, Largo Máximo Vga 490 mm, Altura Máxima Del Cooler Cpu 198.00 mm',
          "categories":["Gabinete"],
          "quantity":3,
          "brand":'Cooler Master',
          
          "compatible": 'All',
          
          }
          ,
          {
          "x":103,
          "name":'Procesador AMD Ryzen 3 4100 Sin cooler OEM',
          "price": 16000,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32737_Procesador_AMD_Ryzen_3_4100_Sin_cooler_OEM_d6ef51fc-grn.jpg',
          "description":'Modelo 4100, Socket AM4 Ryzen 4th Gen, Núcleos 4, Frecuencia 3800.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu NO Posee Gráficos Integrados, Hilos 8, Frecuencia Turbo 4000 mhz, Familia AMD RYZEN 3',
          "categories":["Processor"],
          "quantity":4,
          "brand":'AMD',
          "compatible": 'AMD',
          
          }
  ,
          {
          "x":104,
          "name":'Procesador AMD Ryzen 5 PRO 4650G 4.2GHz Turbo + Wraith Stealth Cooler OEM',
          "price": 37950,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21462_Procesador_AMD_Ryzen_5_PRO_4650G_4.2GHz_Turbo___Wraith_Stealth_Cooler_OEM_52f8e46a-grn.jpg',
          "description":'Modelo Ryzen 5 PRO 4650G, Socket AM4 APU 3th Gen, Núcleos 6, Frecuencia 3700.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu Radeon Vega 7, Hilos 12, Frecuencia Turbo 4200 mhz Familia AMD RYZEN 5',
          "categories":["Processor"],
          "quantity":6,
          "brand":'AMD',
          "compatible": 'AMD',
          
          }
  ,
          {
          "x":105,
          "name":'Procesador AMD Ryzen 7 PRO 4750G + Wraith Stealth Cooler OEM',
          "price": 56850,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29519_Procesador_AMD_Ryzen_7_PRO_4750G___Wraith_Stealth_Cooler_OEM_52f8e46a-grn.jpg',
          "description":'Modelo PRO 4750G, Socket AM4 APU 3th Gen, Núcleos 8, Frecuencia 3600.00 mhz, Proceso De Fabricación 7 nm, Chipset Gpu Radeon Vega 7, Hilos 16, Frecuencia Turbo 4400 mhz, Familia AMD RYZEN 7',
          "categories":["Processor"],
          "quantity":4,
          "brand":'AMD',
          "compatible": 'AMD',
          
          }
,
          {
          "x":203,
          "name":'Mother Asrock X570 Phantom Gaming 4 AM4 PCIe Gen4',
          "price": 33350,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14225_Mother_Asrock_X570_Phantom_Gaming_4_AM4_PCIe_Gen4_60447878-grn.jpg',
          "description":'Socket AM4, APU 2th Gen,AM4 Ryzen 3th Gen,AM4 APU 3th Gen,AM4 Ryzen 4th Gen,AM4 Ryzen 2th Gen,AM4 APU 5000,Chipsets Principal AMD X570, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2',
          "categories":["Mother"],
          "quantity":7,
          "brand":'Asrock',
          "compatible": 'AMD',
          
          }
,
          {
          "x":204,
          "name":'Mother ASUS ROG STRIX B450-F GAMING II AM4',
          "price": 38100,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22370_Mother_ASUS_ROG_STRIX_B450-F_GAMING_II_AM4_c17380b9-grn.jpg',
          "description":'Socket AM4 APU 1th Gen,AM4 APU 2th Gen,AM4 Ryzen 1th Gen,AM4 Ryzen 2th Gen,AM4 Ryzen 3th Gen,AM4 APU 3th Gen,AM4 Ryzen 4th Gen,AM4 APU 5000, Chipsets Principal AMD B450, Boton Bios Flashback Si, Cantidad De Slot Pci-e 16X 3, Watts Máximos Para Cpu 105',
          "categories":["Mother"],
          "quantity":3,
          "brand":'Asus',
          "compatible": 'AMD',
          
          }
,
          {
          "x":205,
          "name":'Mother ASUS ROG STRIX B550-A Gaming AM4',
          "price": 48350,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25162_Mother_ASUS_ROG_STRIX_B550-A_Gaming_AM4_92d1ac66-grn.jpg',
          "description":'Socket AM4 APU 3th Gen,AM4 Ryzen 3th Gen,AM4 Ryzen 4th Gen,AM4 APU 5000, Chipsets Principal AMD B550, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Watts Máximos Para Cpu 105',
          "categories":["Mother"],
          "quantity":7,
          "brand":'Asus',
          "compatible": 'AMD',
          
          }
,
          {
          "x":303,
          "name":'Placa de Video XFX Radeon RX 6650 XT 8GB GDDR6 Speedster SWFT 210',
          "price": 122200,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
          "description":'Chipset Gpu RX 6650 XT, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing, Velocidad Memoria 17500 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 8 gb, Interface De Memoria 128 bits, Velocidad Del Core Turbo 2635 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2048',
          "categories":["VGA"],
          "quantity":8,
          "brand":'AMD',
          "compatible": 'AMD',
          
          }
,
          {
          "x":304,
          "name":'Placa de Video XFX Radeon RX 6700 XT BLACK 12GB GDDR6 SPEEDSTER QICK 319',
          "price": 127950,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26454_Placa_de_Video_XFX_Radeon_RX_6700_XT_BLACK_12GB_GDDR6_SPEEDSTER_QICK_319_20499629-grn.jpg',
          "description":'Chipset Gpu RX 6700 XT, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing, Velocidad Memoria 16000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 12 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 2622 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2560',
          "categories":["VGA"],
          "quantity":4,
          "brand":'AMD',
          "compatible": 'AMD',
          
          }
,
          {
          "x":305,
          "name":'Placa de Video MSI Radeon RX 6700 XT 12GB GDDR6 MECH 2X',
          "price": 129200,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25390_Placa_de_Video_MSI_Radeon_RX_6700_XT_12GB_GDDR6_MECH_2X_137b5ac7-grn.jpg',
          "description":'Chipset Gpu RX 6700 XT, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Características Especiales Ray Tracing, Velocidad Memoria 16000 mhz, Tipo De Memoria GDDR6, Capacidad De Memoria 12 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 2581 mhz, Tipos De Procesos Stream, Cantidad De Procesos 2560',
          "categories":["VGA"],
          "quantity":4,
          "brand":'Msi',
          "compatible": 'AMD',
          
          }
  ,
          {
          "x":403,
          "name":'Procesador Intel Celeron G5925 3.6GHz Socket 1200 ',
          "price": 9350,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27562_Procesador_Intel_Celeron_G5925_3.6GHz_Socket_1200_764c73ec-grn.jpg',
          "description":'Modelo G5925, Socket 1200 Comet Lake, Núcleos 2, Frecuencia 3600.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu Intel UHD Graphics 610, Hilos 2, Familia Intel Celeron',
          "categories":["Processor"],
          "quantity":7,
          "brand":'Intel',
          "compatible": 'Intel',
          
          }
  ,
          {
          "x":404,
          "name":'Procesador Intel Pentium Gold G6405 4.1GHz Socket 1200',
          "price": 12800,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27888_Procesador_Intel_Pentium_Gold_G6405_4.1GHz_Socket_1200_db6250b7-grn.jpg',
          "description":'Modelo G6405, Socket 1200 Comet Lake, Núcleos 2, Frecuencia 4100.00 mhz, Proceso De Fabricación 14 nm, Chipset Gpu Intel UHD Graphics 610, Hilos 4, Familia Intel Pentium',
          "categories":["Processor"],
          "quantity":3,
          "brand":'Intel',
          "compatible": 'Intel',
          
          }
  ,
          {
          "x":405,
          "name":'Procesador Intel Pentium Gold G7400 12th Gen S1700',
          "price": 17000,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31723_Procesador_Intel_Pentium_Gold_G7400_12th_Gen_S1700_f70c180b-grn.jpg',
          "description":'Modelo G7400, Socket 1700 Alder Lake-S, Núcleos 2, Frecuencia 3700.00 mhz, Proceso De Fabricación 10 nm, Chipset Gpu UHD Graphics 710, Hilos 4, Familia Intel Pentium',
          "categories":["Processor"],
          "quantity":4,
          "brand":'Intel',
          "compatible": 'Intel',
          
          }
,
          {
          "x":503,
          "name":'Mother MSI H310M PRO-VDH',
          "price": 9280,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_7342_Mother_MSI_H310M_PRO-VDH_f6a0fec1-grn.jpg',
          "description":'Socket 1151 Coffe Lake,Chipsets Principal Intel H310, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Cantidad De Slot Ddr4 2, Placa De Sonido 7.1 Realtek ALC 887',
          "categories":["Mother"],
          "quantity":7,
          "brand":'Msi',
          "compatible": 'Intel',
          
          }
,
          {
          "x":504,
          "name":'Mother Gigabyte Z590 Vision G Socket 1200 10th Gen',
          "price": 63450,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26145_Mother_Gigabyte_Z590_Vision_G_Socket_1200_10th_Gen_5c6956fe-grn.jpg',
          "description":'Socket 1200 Rocket Lake-S,1200 Comet Lake, Chipsets Principal Intel Z590, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Cantidad De Slot Ddr4 4, Sistema De Conexión Rgb ARGB Header,RGB Header, Placa De Sonido 7.1 Realtek ALC 887',
          "categories":["Mother"],
          "quantity":2,
          "brand":'Gigabyte',
          "compatible": 'Intel',
          
          }
,
          {
          "x":505,
          "name":'Mother Asrock H610M-HVS LGA 1700',
          "price": 16200,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34006_Mother_Asrock_H610M-HVS_LGA_1700_486791bd-grn.jpg',
          "description":'Socket 1700 Alder Lake-S,Chipsets Principal Intel H610, Boton Bios Flashback No, Cantidad De Slot Pci-e 16X 2, Cantidad De Slot Ddr4 2, Placa De Sonido 7.1 Realtek ALC 887',
          "categories":["Mother"],
          "quantity":7,
          "brand":'Asrock',
          "compatible": 'Intel',
          
          }
,
          {
          "x":603,
          "name":'Placa de Video Zotac GeForce GTX 1660 6GB GDDR5 Dual Fan',
          "price": 91250,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27744_Placa_de_Video_Zotac_GeForce_GTX_1660_6GB_GDDR5_Dual_Fan_82cd70d8-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu GTX 1660, Entrada Video No, Puente Para Sli/croosfirex - Doble Puente No, Velocidad Memoria 8000 mhz, Tipo De Memoria GDDR5, Capacidad De Memoria 6 gb, Interface De Memoria 192 bits, Velocidad Del Core Turbo 1785 mhz, Tipos De Procesos CUDA, Cantidad De Procesos 1408',
          "categories":["VGA"],
          "quantity":8,
          "brand":'GeForce',
          "compatible": 'Intel',
          
          }
,
          {
          "x":604,
          "name":'Placa de Video Zotac GeForce RTX 3090 24GB GDDR6X Trinity',
          "price": 342000,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32388_Placa_de_Video_Zotac_GeForce_RTX_3090_24GB_GDDR6X_Trinity_14af4797-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RTX 3090, Entrada Video No, Puente Para Sli/croosfirex SLI, Doble Puente No, Características Especiales Ray Tracing + DLSS, Velocidad Memoria 19500 mhz, Tipo De Memoria GDDR6X, Capacidad De Memoria 24 gb, Interface De Memoria 384 bits, Velocidad Del Core Turbo 1695 mhz Tipos De Procesos CUDA, Cantidad De Procesos 10496',
          "categories":["VGA"],
          "quantity":8,
          "brand":'GeForce',
          "compatible": 'Intel',
          
          }
,
          {
          "x":605,
          "name":'Placa de Video ASUS GeForce RTX 3090 24GB GDDR6X ROG STRIX GAMING White OC',
          "price": 391150,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33945_Placa_de_Video_ASUS_GeForce_RTX_3090_24GB_GDDR6X_ROG_STRIX_GAMING_White_OC_16beecb4-grn.jpg',
          "description":'Tipo pcie, Chipset Gpu RTX 3090, Entrada Video No, Puente Para Sli/croosfirex SLI, Doble Puente No, Características Especiales Ray Tracing + DLSS, Velocidad Memoria 19500 mhz, Tipo De Memoria GDDR6X, Capacidad De Memoria 24 gb, Interface De Memoria 384 bits, Velocidad Del Core Turbo 1890 mhz Tipos De Procesos CUDA, Cantidad De Procesos 10496',
          "categories":["VGA"],
          "quantity":2,
          "brand":'Asus',
          "compatible": 'Intel',
          
          }
,
          {
          "x":703,
          "name":'Memoria Adata DDR4 16GB (2x8GB) 3600MHz XPG Spectrix D45G RGB',
          "price": 16770,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33970_Memoria_Adata_DDR4_16GB__2x8GB__3600MHz_XPG_Spectrix_D45G_RGB_813bb6ab-grn.jpg',
          "description":'Capacidad 16 gb, Velocidad 3600 mhz, Tipo DDR4, Cantidad De Memorias 2, Latencia 18 cl, Voltaje 1.35 v',
          "categories":["Memory"],
          "quantity":6,
          "brand":'Adata',
          "compatible": 'All',
          
          }
,
          {
          "x":704,
          "name":'Memoria Adata DDR4 16GB (2x8Gb) 3200Mhz XPG Spectrix D60G RGB',
          "price": 15130,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33985_Memoria_Adata_DDR4_16GB__2x8Gb__3200Mhz_XPG_Spectrix_D60G_RGB__965beb3e-grn.jpg',
          "description":'Capacidad 16 gb, Velocidad 3600 mhz, Tipo DDR4, Cantidad De Memorias 2, Latencia 16 cl, Voltaje 1.35 v',
          "categories":["Memory"],
          "quantity":4,
          "brand":'Adata',
          "compatible": 'All',
          
          }
,
          {
          "x":705,
          "name":'Memoria Team DDR4 16GB (2x8GB) 3600MHz T-Force Delta White RGB CL14',
          "price": 15130,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34065_Memoria_Team_DDR4_16GB__2x8GB__3600MHz_T-Force_Delta_White_RGB_CL14_2833e631-grn.jpg',
          "description":'Capacidad 16 gb, Velocidad 3600 mhz, Tipo DDR4, Cantidad De Memorias 2, Latencia 14 cl, Voltaje 1.45 v',
          "categories":["Memory"],
          "quantity":4,
          "brand":'Team',
          "compatible": 'All',
          
          }
,
          {
          "x":806,
          "name":'Disco Rigido Seagate 3TB IronWolf 64MB 5.9K RPM',
          "price": 14850,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26170_Disco_Rigido_Seagate_3TB_IronWolf_64MB_5.9K_RPM_2b794cfe-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 7 w, Tipo De Disco Mecánico, Memoria Cache 64 mb, Velocidad De Rotación 5900 rpm, Velocidad De Interface 6.0, Capacidad 3000 gb',
          "categories":["Disk"],
          "quantity":9,
          "brand":'Seagate',
          "compatible": 'All',
          
          }
,
          {
          "x":807,
          "name":'Disco Rigido WD 4TB Red NAS 5.4K 256MB',
          "price": 18170,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26761_Disco_Rigido_WD_4TB_Red_NAS_5.4K_256MB_d82aa5a7-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 8 w, Tipo De Disco Mecánico, Memoria Cache 256 mb, Velocidad De Rotación 5400 rpm, Velocidad De Interface 6.0, Capacidad 4000 gb',
          "categories":["Disk"],
          "quantity":7,
          "brand":'WD',
          "compatible": 'All',
          
          }
,
          {
          "x":808,
          "name":'Disco Rigido WD 6TB Purple 5.6K RPM 256MB',
          "price": 26660,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26765_Disco_Rigido_WD_6TB_Purple_5.6K_RPM_256MB_18eb156b-grn.jpg',
          "description":'Tipo De Conexión SATA, Consumo 12 w, Tipo De Disco Mecánico, Memoria Cache 256 mb, Velocidad De Rotación 5640 rpm, Velocidad De Interface 6.0, Capacidad 6000 gb',
          "categories":["Disk"],
          "quantity":4,
          "brand":'WD',
          "compatible": 'All',
          
          }
,
          {
          "x":903,
          "name":'Fuente ASUS ROG STRIX 850G 80 Plus Gold 850W Full Modular White',
          "price": 32999,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33004_Fuente_ASUS_ROG_STRIX_850G_80_Plus_Gold_850W_Full_Modular_White_fc5a33dd-grn.jpg',
          "description":'Watts Nominal 850 w, Watts Reales 840 w, Formato ATX Compatible Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Gold, Modo Híbrido Si, Tipo De Cableado Full Modular Ampers En Linea +12V 70 a, Fuente Digital No, Color Blanco',
          "categories":["Fuente"],
          "quantity":4,
          "brand":'Asus',
          "compatible": 'All',
          
          }
,
          {
          "x":904,
          "name":'Fuente Aerocool Mirage 850W 80+ Gold ARGB',
          "price": 22260,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33717_Fuente_Aerocool_Mirage_850W_80__Gold_ARGB_b5877b48-grn.jpg',
          "description":'Watts Nominal 850 w, Watts Reales 840 w, Formato ATX Compatible Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Gold, Modo Híbrido Si, Tipo De Cableado Full Modular Ampers En Linea +12V 70 a, Fuente Digital No, Color Negro',
          "categories":["Fuente"],
          "quantity":9,
          "brand":'Aerocool',
          "compatible": 'All',
          
          }
,
          {
          "x":905,
          "name":'Fuente Gamemax 800W 80 Plus Bronze VP-800',
          "price": 14750,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17855_Fuente_Gamemax_800W_80_Plus_Bronze_VP-800_effe4fa6-grn.jpg',
          "description":'Watts Nominal 800 w, Watts Reales 720 w, Formato ATX Compatible Con Posición Inferior Si, Certificacion 80 Plus 80 PLUS Bronze, Modo Híbrido Si, Tipo De Cableado Full Modular Ampers En Linea +12V 60 a, Fuente Digital No, Color Negro',
          "categories":["Fuente"],
          "quantity":3,
          "brand":'Gamemax',
          "compatible": 'All',
          
          }
,
          {
          "x":1003,
          "name":'Gabinete Aerocool Bolt Black RGB Ventana Acrilica ATX',
          "price": 9540,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13554_Gabinete_Aerocool_Bolt_Black_RGB_Ventana_Acrilica_ATX_66b77f2a-grn.jpg',
          "description":'Factor Mother ITX,M-ATX,ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Acrílico, Colores Negro, Ancho 194 mm, Alto 440 mm, Profundidad 410 mm, Largo Máximo Vga 335 mm, Altura Máxima Del Cooler Cpu 155.00 mm',
          "categories":["Gabinete"],
          "quantity":2,
          "brand":'Aerocool',
          "compatible": 'All',
          
          }
,
          {
          "x":1004,
          "name":'Gabinete Game Pro GP6 ARGB',
          "price": 12070,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34069_Gabinete_Game_Pro_GP6_ARGB_ff52c55e-grn.jpg',
          "description":'Factor Mother ITX,M-ATX,ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Acrílico, Colores Negro, Ancho 196 mm, Alto 469 mm, Profundidad 427 mm, Largo Máximo Vga 345 mm, Altura Máxima Del Cooler Cpu 160.00 mm',
          "categories":["Gabinete"],
          "quantity":2,
          "brand":'Aerocool',
          "compatible": 'All',
          
          }
,
          {
          "x":1005,
          "name":'Gabinete Thermaltake V200 Tempered Glass Ryzen Edition Sin fuente',
          "price": 7199,
          "image":'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32090_Gabinete_Thermaltake_V200_Tempered_Glass_Ryzen_Edition_Sin_fuente_133340c2-grn.jpg',
          "description":'Factor Mother ITX,M-ATX,ATX, Fuente En Posición Superior No, Con Ventana Si, Tipo De Ventana Acrílico, Colores Negro, Ancho 190 mm, Alto 410 mm, Profundidad 470 mm, Largo Máximo Vga 380 mm, Altura Máxima Del Cooler Cpu 160.00 mm',
          "categories":["Gabinete"],
          "quantity":8,
          "brand":'Thermaltake',
          "compatible": 'All',
          
          }

    ]

module.exports= jsonProducts