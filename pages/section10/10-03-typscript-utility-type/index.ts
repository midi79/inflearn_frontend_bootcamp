export interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
}

// Partial type : all types are optional
type partProfile = Partial<IProfile>;

// Required type : all types are non-optional
type nonPartProfile = Required<IProfile>;

// Pick type
type pickProfile = Pick<IProfile, "name" | "age">;

// Omit type : Extrace specific type
type omitPofile = Omit<IProfile, "school">;

// Record type
type recordType = "Apple" | "Orange" | "Banana"; // Union type
let affordableFruit: recordType = "Apple";
type fruitProfile = Record<recordType, IProfile>; // Record type

// Extrace key from object
type keyType = keyof IProfile;
let aKey: keyType = "age";

 