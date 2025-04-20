import { Link } from "react-router-dom";
import { Server, Mail, Github, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <Server className="h-8 w-8 text-primary mr-3" />
              <span className="minecraft-font text-2xl font-semibold">
                Girix
              </span>
            </Link>
            <p className="mb-4 text-muted-foreground">
              Погрузись в увлекательный мир Minecraft на нашем сервере. 
              Строй, исследуй и общайся с игроками со всего мира.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="minecraft-font text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О сервере
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-muted-foreground hover:text-primary transition-colors">
                  Правила
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  ЧаВо
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Поддержать проект
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="minecraft-font text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:info@girix.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@girix.ru
                </a>
              </li>
              <li>
                <a href="https://discord.gg/girix" className="text-muted-foreground hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://vk.com/girix" className="text-muted-foreground hover:text-primary transition-colors">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="https://t.me/girixmc" className="text-muted-foreground hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Girix Minecraft. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;