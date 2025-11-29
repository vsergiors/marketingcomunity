document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        const targetSelector = this.getAttribute('href');

        // Solo scroll suave si el href empieza con #
        if(targetSelector.startsWith('#')){
            e.preventDefault();
            const target = document.querySelector(targetSelector);
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // Enlaces a otras páginas funcionan normalmente
    });
});

// Copiar IP al portapapeles en Minecraft
const copyBtn = document.getElementById('copyBtn');
if(copyBtn){
    copyBtn.addEventListener('click', function(e){
        e.preventDefault(); // evitar que haga scroll o navegue
        const textToCopy = "TeckMC.falixsrv.me";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("IP copiada al portapapeles: " + textToCopy);
            })
            .catch(err => {
                console.error("Error al copiar: ", err);
            });
    });
}
// Función para mostrar mensaje flotante
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = '#ff66b2'; // rosa de tu web
    toast.style.color = 'white';
    toast.style.padding = '12px 25px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    toast.style.zIndex = '1000';
    toast.style.fontWeight = 'bold';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';

    document.body.appendChild(toast);

    // Aparece
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);

    // Desaparece después de 2 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 2000);
}

// Copiar IP al portapapeles en Minecraft
const copybnt = document.getElementById('copyBtn');
if(copyBtn){
    copyBtn.addEventListener('click', function(e){
        e.preventDefault();
        const textToCopy = "TeckMC.falixsrv.me";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                showToast("IP copiada al portapapeles: " + textToCopy);
            })
            .catch(err => console.error("Error al copiar: ", err));
    });
}
const copyEmailBtn = document.getElementById('copyEmailBtn');
if(copyEmailBtn){
    copyEmailBtn.addEventListener('click', function(e){
        e.preventDefault();
        const emailToCopy = "vsergiors@gmail.com";
        navigator.clipboard.writeText(emailToCopy)
            .then(() => showToast("Correo copiado al portapapeles: " + emailToCopy))
            .catch(err => console.error("Error al copiar: ", err));
    });
}
// --- Botones "Comprar" en tienda que abren Discord y copian enlace ---
const discordLink = "https://discord.gg/4YpJ2jbgnU";

// IDs de los botones de tienda
["buyWebBtn","buyThumbBtn","buyRenderBtn","buyConsultBtn"].forEach(id => {
    const btn = document.getElementById(id);
    if(btn){
        btn.addEventListener('click', function(e){
            e.preventDefault();
            // Copiar enlace al portapapeles
            navigator.clipboard.writeText(discordLink)
                .then(() => showToast("Enlace de Discord copiado al portapapeles"))
                .catch(err => console.error("Error al copiar: ", err));
            // Abrir Discord en nueva pestaña
            window.open(discordLink, "_blank");
        });
    }
});
