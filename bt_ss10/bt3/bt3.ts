class Employee {
    public name: string
    protected company:string
    private phone:string
    constructor(name:string, company:string, phone:string){
        this.name = name
        this.company = company
        this.phone = phone
    }
    printInfo():void {
        console.log("name:", this.name);
        console.log("company:", this.company);
        console.log("phone:", this.phone);
    }
}

let entity = new Employee("Hiếu Phạm", "lính đánh thuê", "012345789")
entity.printInfo();
