import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const serverAddress = "girix.aternos.me:16260";

  const copyServerAddress = () => {
    navigator.clipboard.writeText(serverAddress);
    toast({
      title: "Адрес скопирован!",
      description: "Адрес сервера был скопирован в буфер обмена.",
    });
  };

  return (
    <div className="relative min-h-screen bg-background bg-[url('/images/minecraft-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-background/70"></div>
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 flex flex-col items-center justify-center min-h-screen">
        <h1 className="minecraft-font text-4xl md:text-6xl text-center font-bold text-primary mb-6">
          GIRIX Minecraft
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
          Лучший сервер для любителей выживания и приключений! Присоединяйтесь к 
          нашему сообществу и стройте свои миры вместе с нами.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="minecraft-font text-lg">
            Начать игру
          </Button>
          <div className="flex border-2 border-primary rounded-md overflow-hidden">
            <div className="bg-card p-3 flex items-center">
              <span className="font-medium mr-2">{serverAddress}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={copyServerAddress}
                className="h-8 w-8"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-card p-6 rounded-lg border border-border text-center flex flex-col items-center">
            <div className="bg-accent/20 p-3 rounded-full mb-4">
              <span className="text-3xl">🏰</span>
            </div>
            <h3 className="minecraft-font text-xl font-bold mb-2">Выживание</h3>
            <p className="text-muted-foreground">Создавай свои строения и выживай в опасном мире</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center flex flex-col items-center animate-float">
            <div className="bg-primary/20 p-3 rounded-full mb-4">
              <span className="text-3xl">⚔️</span>
            </div>
            <h3 className="minecraft-font text-xl font-bold mb-2">PvP арены</h3>
            <p className="text-muted-foreground">Сражайся с другими игроками и докажи свою силу</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center flex flex-col items-center">
            <div className="bg-minecraft-orange/20 p-3 rounded-full mb-4">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="minecraft-font text-xl font-bold mb-2">Сообщество</h3>
            <p className="text-muted-foreground">Присоединяйся к дружному комьюнити игроков</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;