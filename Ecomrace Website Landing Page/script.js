
        const products = [
            {
                title: "ChronoX Black Edition",
                img: "/Ecomrace Website Landing Page/images/product 1.png",
                price: 2000,
                description: "Minimalist matte black digital watch with a crisp LED display. Perfect for everyday wear with a premium edge."
            },
            {
                title: "LumiTech Silver Glow",
                img: "/Ecomrace Website Landing Page/images/product 2.png",
                price: 2500,
                description: "A stainless steel digital watch featuring a glowing blue interface. Combines durability with futuristic style."
            },
            {
                title: "PulseFit Active",
                img: "/Ecomrace Website Landing Page/images/product 3.png",
                price: 3000,
                description: "Sporty digital watch with fitness tracking, heart-rate monitor, and water resistance. Designed for active lifestyles."
            },
            {
                title: "NeoTime Classic",
                img: "/Ecomrace Website Landing Page/images/product 4.png",
                price: 2200,
                description: "Timeless rectangular digital design with a soft leather strap. A blend of retro charm and modern tech."
            },
            {
                title: "AeroLite Slim",
                img: "/Ecomrace Website Landing Page/images/product 5.png",
                price: 1800,
                description: "Ultra-thin digital watch with a lightweight build. Sleek design for those who value comfort and elegance."
            },
            {
                title: "GlideX Titanium",
                img: "/Ecomrace Website Landing Page/images/product 6.png",
                price: 3500,
                description: "Titanium body with scratch-resistant glass and a bold digital dial. Built for strength and sophistication."
            },
            {
                title: "LumiTech Silver Glow",
                img: "/Ecomrace Website Landing Page/images/product 7.png",
                price: 2600,
                description: "A sleek silver metallic digital watch with a glowing blue LED display. Perfect for a futuristic, professional vibe."
            },
            {
                title: "PulseFit Red Sport",
                img: "/Ecomrace Website Landing Page/images/product 8.png",
                price: 2900,
                description: "Energetic red digital smartwatch with bold white display. Designed for fitness lovers and sporty personalities."
            },
            {
                title: "Aurora Luxe Gold",
                img: "/Ecomrace Website Landing Page/images/product 9.png",
                price: 4000,
                description: "Luxury gold digital watch with a glowing white LED screen. A statement piece for premium buyers."
            },
            {
                title: "VividWave Blue",
                img: "/Ecomrace Website Landing Page/images/product 10.png",
                price: 2400,
                description: "Modern blue digital smartwatch with crisp white display. Stylish yet casual, ideal for everyday wear."
            },
            {
                title: "Zenith White Edition",
                img: "/Ecomrace Website Landing Page/images/product 11.png",
                price: 2700,
                description: "Minimalist white digital watch with glowing orange LED display. Clean, elegant, and perfect for a lifestyle showcase."
            }
        ];
        const showDetails = (productTitle) => {
            const product = products.filter(p => p.title == productTitle)
            console.log(product);
            document.getElementById("product-img").src = product[0].img;
            document.getElementById("product-title").innerText = product[0].title;
            document.getElementById("product-price").innerText = "Rs. " + product[0].price;
            document.getElementById("product-description").innerText = product[0].description;

        }
