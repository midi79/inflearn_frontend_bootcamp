export default function TypeScriptPage() {
    
    let hello = "Hello!";
    //hello = 3;

    let meet: String = "Nice to meet you";
    //meet = 10;

    let third: number | string = 3;
    third = "3";

    let justice: boolean = true;
    justice = false;
    //justice = "false";

    //let numberList: number[] = [ 1, 2, 4, 5, "Hello"];
    //let stringList: string[] = ["IU", "Teayeon", "Winter", 10];
    let hybridList: (string | number)[] = ["IU", "Teayeon", "Winter", 10];
    
    interface IProfile {
        name: string,
        age: number | string,
        school: string,
        hobby?: string // Optional
    }

    const profile: IProfile = {
        name: "Anderson",
        age: 30,
        school: "Unitec university"
    }
    
    function add(number1: number, number2: number, unit: string): string {
        return number1 + number2 + unit;
    }

    const result = add(100, 2000, "Dollar");

    const add2 = (number1: number, number2: number, unit: string): string => {
        return number1 + number2 + unit;
    }


    return <></>
}