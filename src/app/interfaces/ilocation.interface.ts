export interface IP {
  ip: string;
}

export interface ILocation {
  ip:       string;
  location: LocationClass;
  as:       As;
  isp:      string;
  proxy:    Proxy;
}

export interface As {
  asn:    number;
  name:   string;
  route:  string;
  domain: string;
  type:   string;
}

export interface LocationClass {
  country:    string;
  region:     string;
  city:       string;
  lat:        number;
  lng:        number;
  postalCode: string;
  timezone:   string;
  geonameId:  number;
}

export interface Proxy {
  proxy: boolean;
  vpn:   boolean;
  tor:   boolean;
}
