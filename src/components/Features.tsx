import { 
  Shield, 
  Cpu,, 
  Clock, 
  Activity, 
  Gift, 
  Award, 
  Users
} from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="bg-card p-6 rounded-lg hover:border-primary border border-border transition-colors duration-300">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="minecraft-font text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Анти-Чит",
      description: "Наша защита от читеров обеспечивает честную игру для всех участников",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Мощные сервера",
      description: "Высокопроизводительное оборудование гарантирует стабильную игру без лагов",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Регулярные обновления",
      description: "Мы постоянно добавляем новый контент и улучшаем игровой процесс",
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Активные события",
      description: "Еженедельные ивенты с ценными призами и уникальными испытаниями",
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Бонусы для игроков",
      description: "Получайте дополнительные предметы и возможности за активность",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Рейтинговая система",
      description: "Соревнуйтесь с другими игроками и поднимайтесь в общем рейтинге",
    },
  ];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="minecraft-font text-3xl md:text-4xl font-bold mb-4">
            Почему выбирают <span className="text-primary">Girix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наш сервер предлагает уникальный игровой опыт с множеством функций и возможностей
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-card py-3 px-5 rounded-full border border-border">
            <Users className="h-5 w-5 text-primary" />
            <span className="font-medium">Более 1000 активных игроков каждый день</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;