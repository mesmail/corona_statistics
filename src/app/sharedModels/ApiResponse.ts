export class total {
    date: Date = new Date();
    name: string =  "";
    name_es: string = "";
    name_it: string = "";
    rid: string = "";
    source: string = "";
    today_confirmed: number = 0;
    today_deaths: number = 0;
    today_new_confirmed: number = 0;
    today_new_deaths: number = 0;
    today_new_open_cases: number = 0;
    today_new_recovered: number = 0;
    today_open_cases: number = 0;
    today_recovered: number = 0;
    today_vs_yesterday_confirmed: number = 0;
    today_vs_yesterday_deaths: number = 0;
    today_vs_yesterday_open_cases: number = 0;
    today_vs_yesterday_recovered: number = 0;
    yesterday_confirmed: number = 0;
    yesterday_deaths: number = 0;
    yesterday_open_cases: number = 0;
    yesterday_recovered: number = 0;

    constructor () {}
}

class Regions {
  today_confirmed: number = 0;
  today_deaths: number = 0;
  today_new_confirmed: number = 0;
  today_new_deaths: number = 0;
  today_new_open_cases: number = 0;
  today_new_recovered: number = 0;
  today_open_cases: number = 0;
  today_recovered: number = 0;
  today_vs_yesterday_confirmed: number = 0;
  today_vs_yesterday_deaths: number = 0;
  today_vs_yesterday_open_cases: number = 0;
  today_vs_yesterday_recovered: number = 0;
  yesterday_confirmed: number = 0;
  yesterday_deaths: number = 0;
  yesterday_open_cases: number = 0;
  yesterday_recovered: number = 0;
}

class Data {
  regions: Regions[] = [];
}

class Germany {
  Germany: Data = new Data();
}

class Countries {
  countries: Germany = new Germany();
}

interface Dates {
  [k:string] : Countries;
}

export class ApiResponse {
    dates: Dates = {"" : new Countries()};
    metadata: Object = {};
    total: total = new total();
    updated_at: Date = new Date();

    constructor() {}
}
