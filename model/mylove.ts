export class myloVe {
    private _id !: number;
    private _name !: string;
    private _zodiac !: string;
    private _homeTown !: string;
    private _YearOfBirth !: number;
    private _Interests !: string;

    constructor(id: number, name: string, zodiac: string, homeTown: string, YearOfBirth: number, Interests: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._homeTown = homeTown;
        this._YearOfBirth = YearOfBirth;
        this._Interests = Interests;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get homeTown(): string {
        return this._homeTown;
    }

    set homeTown(value: string) {
        this._homeTown = value;
    }

    get YearOfBirth(): number {
        return this._YearOfBirth;
    }

    set YearOfBirth(value: number) {
        this._YearOfBirth = value;
    }

    get Interests(): string {
        return this._Interests;
    }

    set Interests(value: string) {
        this._Interests = value;
    }
}