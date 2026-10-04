export const WHATSAPP_NUMBER = "5493425454106";
export const INSTAGRAM_URL = "https://www.instagram.com/eduardoarguello.dr/";
export const ADDRESS = "Chacabuco 1289, Santa Fe, Santa Fe";

export const whatsappUrl = (
    message = "Hola Dr. Argüello, quisiera consultar por un tratamiento."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    ADDRESS
)}&output=embed`;

export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    ADDRESS
)}`;