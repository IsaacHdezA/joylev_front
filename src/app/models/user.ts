class User {
  user_id?:         number;
  username:         string;
  email:            string;
  password:         string;
  password_salt:    string;
  profile_picture?: string;
  given_name:       string;
  surname:          string;
  gender:           string;
  bio?:             string;
  birthdate:        Date;
  status:           boolean;

  constructor(
    username:        string  = "",
    email:           string  = "",
    password:        string  = "",
    password_salt:   string  = "",
    profile_picture: string  = "no_user.jpg",
    given_name:      string  = "",
    surname:         string  = "",
    gender:          string  = "",
    bio:             string  = "",
    birthdate:       Date    = new Date(),
    status:          boolean = false 
  ) {
    this.username        = username;
    this.email           = email;
    this.password        = password;
    this.password_salt   = password_salt;
    this.profile_picture = profile_picture;
    this.given_name      = given_name;
    this.surname         = surname;
    this.gender          = gender;
    this.bio             = bio;
    this.birthdate       = birthdate;
    this.status          = status;
  }
}

export { User };