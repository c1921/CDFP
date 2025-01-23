export interface Plant {
  name: string
  scientificName: string
  image: string
  description: string
  toxicityToCats: '有毒' | '无毒'
  toxicityToDogs: '有毒' | '无毒'
} 