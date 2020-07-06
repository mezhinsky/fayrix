export interface CowModel {
	heatIndexPeak: number,
	healthIndex: number,

	type: string,
	cowId: string,
	animalId: string,
	eventId: number,
	deletable: boolean,
	lactationNumber: number,
	daysInLactation: number,
	ageInDays: number,
	startDateTime: number,
	endDate: number,
	endDateTime: number,
	minValueDateTime: number,
	reportingDateTime: number,
}