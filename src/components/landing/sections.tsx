import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const heroImage = "https://cdn.poehali.dev/projects/59322b72-900d-4b50-b50f-f46f540645b8/files/f652f52b-e97c-49a9-9431-cb4d5211014c.jpg"
const nailsImage = "https://cdn.poehali.dev/projects/59322b72-900d-4b50-b50f-f46f540645b8/files/4f22756f-46f8-4cc1-b35b-021d3985e957.jpg"
const makeupImage = "https://cdn.poehali.dev/projects/59322b72-900d-4b50-b50f-f46f540645b8/files/f65545f8-ac6b-429e-b4ee-1409577eb9d2.jpg"

const features = [
  { icon: "Gift", label: "Бонусы постоянным клиентам" },
  { icon: "Shield", label: "Гарантия качества и безопасности" },
  { icon: "Calendar", label: "Удобная запись онлайн 24/7" },
  { icon: "Heart", label: "Индивидуальный подход к каждой" },
]

const services = [
  { icon: "Sparkles", name: "Маникюр", desc: "Безупречное покрытие, идеальная форма и бережная забота. Только качественные материалы.", price: "от 1 300 ₽" },
  { icon: "Wand2", name: "Макияж", desc: "Создаём образы — от нежного мейк-апа до роскошного вечернего образа.", price: "от 2 500 ₽" },
  { icon: "Eye", name: "Ресницы", desc: "Наращивание и ламинирование для выразительного взгляда. Естественный объём.", price: "от 2 000 ₽" },
  { icon: "Scissors", name: "Брови", desc: "Архитектура и окрашивание. Подберём идеальную форму именно вашему лицу.", price: "от 1 200 ₽" },
]

const reviews = [
  { name: "Каролина Власова", stars: 5, text: "Была на окрашивании волос. Всё очень понравилось — работа выполнена качественно, цвет получился такой, как я хотела. Всем рекомендую!" },
  { name: "Ольга Бузова", stars: 5, text: "Девочки, это просто бомба! Макияж — огонь, мастер волшебница. Стойкость супер, хоть на сцену. Люблю вас ❤️" },
  { name: "Яна Семакина", stars: 5, text: "Сходила сюда на ноготочки. Всё очень понравилось. Сделали френч и покрыли вкусняшками. Пять звёзд!" },
]

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <div className="flex items-center gap-2">
        <Badge className="text-white border-none px-4 py-1 rounded-full text-sm font-medium" style={{ background: 'linear-gradient(135deg, #e91e8c, #f06292)' }}>
          Запись открыта
        </Badge>
        <span className="text-sm" style={{ color: 'hsl(340, 25%, 50%)' }}>Скидка 15% на первое посещение</span>
      </div>
    ),
    title: "Красота · Стиль · Уверенность",
    content: "Мы верим, что каждая девушка уникальна. Наша команда профессионалов поможет подчеркнуть вашу естественную красоту и создать образ, о котором вы мечтали.",
    showButton: true,
    buttonText: "Записаться",
    extra: (
      <div className="relative mt-4 rounded-3xl overflow-hidden shadow-2xl w-64 h-80 md:absolute md:right-16 md:top-1/2 md:-translate-y-1/2 md:w-80 md:h-[500px]" style={{ display: 'none' }}>
        <img src={heroImage} alt="Beauty Salon" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    id: 'benefits',
    subtitle: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-2 p-4 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)' }}>
            <Icon name={f.icon as Parameters<typeof Icon>[0]['name']} size={28} style={{ color: 'hsl(340, 65%, 65%)' }} />
            <span className="text-xs font-medium leading-tight" style={{ color: 'hsl(340, 25%, 35%)' }}>{f.label}</span>
          </div>
        ))}
      </div>
    ),
    title: "Наши преимущества",
    content: "Создаём красоту, в которую вы влюбитесь с первого взгляда — и с каждым днём всё больше.",
  },
  {
    id: 'services',
    title: "Наши услуги",
    content: "",
    extra: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">
        {services.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-3 p-5 rounded-3xl text-center shadow-md" style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #fce4ec, #f8bbd9)' }}>
              <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={22} style={{ color: 'hsl(340, 65%, 60%)' }} />
            </div>
            <div className="font-bold text-base" style={{ color: 'hsl(340, 30%, 25%)' }}>{s.name}</div>
            <div className="text-xs leading-relaxed" style={{ color: 'hsl(340, 15%, 50%)' }}>{s.desc}</div>
            <div className="text-sm font-bold" style={{ color: 'hsl(340, 65%, 60%)' }}>{s.price}</div>
            <button className="text-white text-xs font-semibold px-4 py-2 rounded-full mt-1 hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg, #e91e8c, #f06292)' }}>
              Записаться
            </button>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'works',
    title: "Наши работы",
    content: "Каждая работа — это история красоты и уверенности, которую мы создаём вместе с вами.",
    extra: (
      <div className="flex gap-4 mt-2">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl">
          <img src={nailsImage} alt="Маникюр" className="w-full h-full object-cover" />
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl mt-8">
          <img src={makeupImage} alt="Макияж" className="w-full h-full object-cover" />
        </div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-xl">
          <img src={heroImage} alt="Beauty" className="w-full h-full object-cover" />
        </div>
      </div>
    )
  },
  {
    id: 'reviews',
    title: "Отзывы клиентов",
    content: "",
    extra: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
        {reviews.map((r) => (
          <div key={r.name} className="p-5 rounded-3xl shadow-md" style={{ background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)' }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #e91e8c, #f06292)' }}>
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: 'hsl(340, 30%, 25%)' }}>{r.name}</div>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(340, 15%, 45%)' }}>{r.text}</p>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'join',
    title: "Запишитесь сейчас",
    content: "Ваша красота заслуживает лучшего. Запишитесь на бесплатную консультацию и получите скидку 15% на первое посещение.",
    showButton: true,
    buttonText: "Записаться онлайн",
    extra: (
      <div className="flex items-center gap-6 text-sm mt-2" style={{ color: 'hsl(340, 20%, 50%)' }}>
        <div className="flex items-center gap-2">
          <Icon name="Phone" size={16} style={{ color: 'hsl(340, 65%, 60%)' }} />
          <span>+7 (999) 123-45-67</span>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="MapPin" size={16} style={{ color: 'hsl(340, 65%, 60%)' }} />
          <span>г. Москва, ул. Красоты, 12</span>
        </div>
      </div>
    )
  },
]
