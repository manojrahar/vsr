export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Marcus Vance",
    role: "Studio Technical Director",
    company: "Nebula Interactive",
    quote: "Vishambhar is a phenomenal senior gameplay engineer. His work on flight physics and optimization saved our timeline. He consistently delivers AAA performance under tight constraints.",
    avatar: "MV"
  },
  {
    id: "2",
    name: "Elena Rostova",
    role: "Lead Producer",
    company: "Ironclad Games",
    quote: "The squad destruction systems and multiplayer cover logic Vishambhar built are robust and scalable. He possesses an rare mix of deep physics programming and modern multiplayer network architecture expertise.",
    avatar: "ER"
  },
  {
    id: "3",
    name: "David Chen",
    role: "Creative Director",
    company: "Vortex VR Studios",
    quote: "Vishambhar's grasp of AR plane mapping and VR hand-tracking interactions was pivotal to the launch of Valkyrie Command. He writes clean, modular codebase that designers love working with.",
    avatar: "DC"
  }
];
