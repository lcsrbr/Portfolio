export interface IProjCard {
  title: string;
  description: string;
  techs: ITechs[];
  links: ILinks;
  image: string;
}

export interface ITechs {
  name: string;
  image: string;
}

export interface ILinks {
  github: string;
  website: string;
}

export interface ITheme {
  theme: string;
  font1: string;
  font2: string;
  font3: string;
  background1: string;
  background2: string;
}

export interface ITech {
  img: string;
  title: string;
}
