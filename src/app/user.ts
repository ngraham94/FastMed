import { MedicalHistory } from './medicalHistory';
import { MedicalInsurance } from './medicalInsurance'; 

export class User {
	first_name: string;
	last_name: string;
	phone: number;
	city: string;
	state: string;
	date: string;
	symptoms: string;
	time: string;
	zip: number;
	address: string;
	medical_history: MedicalHistory;
	medical_insurance: MedicalInsurance;
}