class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo?: string;

  constructor(b:string, s: number, r:string, c:string[]){
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn():void {
    console.log(
      `TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \n\
      conexões disponíveis: ${this.connections}`,
    );
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
tv1.turnOn();
