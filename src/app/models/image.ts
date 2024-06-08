class Image {
	image_id?: number;
	activity_id: number;
	path: string;
	status: boolean;

	constructor(
		activity_id: number = 0,
		path:        string = "",
		status:      boolean = false
	) {
		this.activity_id = activity_id;
		this.path = path;
		this.status = status;
	}
}

export { Image };