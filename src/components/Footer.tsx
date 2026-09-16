
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-logo-dark text-primary-foreground">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/fe934f48-b0db-4a5f-aa80-f5d0fed0a611.png`} 
                  alt="General Construções e Reformas" 
                  className="h-16 w-auto mb-4"
                />
              </div>
              
              <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
                Há mais de 30 anos transformando sonhos em realidade através da experiência, 
                qualidade e compromisso do José Nilson "General" dos Santos.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-logo-orange" />
                  <span>(11) 97897-7465</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-logo-orange" />
                  <span>Grande São Paulo e região</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-logo-orange">Nossos Serviços</h4>
              <ul className="space-y-3 text-primary-foreground/80 text-sm">
                <li>Reformas Completas</li>
                <li>Construção do Zero</li>
                <li>Telhados e Coberturas</li>

              </ul>
            </div>

            {/* Business Hours & Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-logo-orange">Atendimento</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-logo-orange" />
                    <span className="font-medium">Horários</span>
                  </div>
                  <div className="text-primary-foreground/80 text-sm space-y-1">
                    <p>Segunda à Sexta: 7h às 18h</p>
                    <p>Sábado: 7h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <p className="text-logo-orange font-medium text-sm">
                    ⚡ Resposta rápida em até 24h
                  </p>
                  <p className="text-logo-orange font-medium text-sm">
                    💬 WhatsApp sempre disponível
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-primary-foreground/60 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} General Construções e Reformas. Todos os direitos reservados.</p>
          </div>
          
          <div className="text-primary-foreground/60">
            <p>José Nilson dos Santos - 30 anos de experiência</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
