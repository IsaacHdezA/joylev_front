class Emotion {
	emotion_id?: number;
	activity_id: number;
	name: string;
	icon: string;

	constructor(
		activity_id: number = 0,
		name:        string = "",
		icon:        string = "fa fa-question-circle"
	) {
		this.activity_id = activity_id;
		this.name = name;
		this.icon = icon;
	}
}

export { Emotion };
