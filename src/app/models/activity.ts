class Activity {
	activity_id?:      number;
	user_id:           number;
	title:             string;
	timestamp_start:   Date;
	timestamp_end:     Date;
	joy_level:         number;
	achievement_level: number;
	latitude:          number;
	longitude:         number;
	description:       string;
	visibility:        string;
	status:            boolean;

	constructor(
		user_id:           number = 0,
		title:             string = "",
		timestamp_start:   Date   = new Date(),
		timestamp_end:     Date   = new Date(),
		joy_level:         number = 0, 
		achievement_level: number = 0,
		latitude:          number = 0,
		longitude:         number = 0,
		description:       string = "",
		visibility:        string = "",
		status:            boolean = false
	) {
		this.user_id           = user_id;
		this.title             = title;
		this.timestamp_start   = timestamp_start;
		this.timestamp_end     = timestamp_end;
		this.joy_level         = joy_level;
		this.achievement_level = achievement_level;
		this.latitude          = latitude;
		this.longitude         = longitude;
		this.description       = description;
		this.visibility        = visibility;
		this.status            = status;
	}
}

export { Activity };

