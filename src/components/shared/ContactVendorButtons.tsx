
import React from 'react';
import { Instagram, Phone } from 'lucide-react';

interface ContactVendorButtonsProps {
  whatsapp?: string;
  instagram?: string;
  message: string;
}

const ContactVendorButtons: React.FC<ContactVendorButtonsProps> = ({ 
  whatsapp, 
  instagram, 
  message 
}) => {
  const encodedMessage = encodeURIComponent(message);
  
  const handleWhatsAppClick = () => {
    if (whatsapp) {
      const formattedNumber = whatsapp.replace(/\D/g, '');
      window.open(`https://wa.me/${formattedNumber}?text=${encodedMessage}`, '_blank');
    }
  };
  
  const handleInstagramClick = () => {
    if (instagram) {
      window.open(`https://instagram.com/${instagram.replace('@', '')}`, '_blank');
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full">
      {whatsapp && (
        <button 
          onClick={handleWhatsAppClick}
          className="whatsapp-btn flex-1"
        >
          <Phone size={18} />
          <span>WhatsApp</span>
        </button>
      )}
      
      {instagram && (
        <button 
          onClick={handleInstagramClick}
          className="instagram-btn flex-1"
        >
          <Instagram size={18} />
          <span>Instagram</span>
        </button>
      )}
    </div>
  );
};

export default ContactVendorButtons;
