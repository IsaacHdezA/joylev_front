class HttpResponse<T> {
  data: T[] | T | undefined;
  count: number;

  message: string;
  code: number;
  error: boolean;

  itemsPerPage?: number;
  page?: number;
  totalPages?: number;

  constructor(
    data: T[] | T | undefined  = [],
    count: number = 0,
    message: string = "",
    code: number = 0,
    error: boolean = false
  ) {
    this.data = data;
    this.count = count;
    this.message = message;
    this.code = code;
    this.error = error;
  }
}

export { HttpResponse };
