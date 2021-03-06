import {billing} from './billing';
import { Actualmedicine } from '../actualmedicines/actualmedicine';

export interface Med2patient {
  id?: string;
  url?: string;
  name?: string;
  patientid? : string;
  registrationNumber? : string;
  dob? : Date;
  dateOfAdmission? : string;
  gender? : string;
  height?: number;
  weight?: number;
  bills? : billing[] ,
  profession?: string;
  mongoId? : string;
  medicines? : Actualmedicine[];
  newmedicines? : Actualmedicine[];
  medtotalcost? : number;
  newmedtotalcost? : number;
}
