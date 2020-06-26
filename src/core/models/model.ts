import { createTable } from "../../mock/mockDB";

export type ReadOptions = {
    idName?: string;
}

class Model<T> {
    private mockDB: { name: string, data: T[] };
    constructor(
        private table: string, 
        private createRecord: (...args: any[]) => T,
        private idName: string
    ) {
        this.mockDB = createTable(table);
    }

    async create(newData: any) {
        this.mockDB.data.push(this.createRecord(newData));
        return this.mockDB.data[this.mockDB.data.length - 1];
    }

    async read(id: number, options: ReadOptions = {}) {
        return this.mockDB.data.filter((record: any) => (
            record[options.idName ?? this.idName] === id
        ));
    }

    async update(id: number, newData: any) {
        if (!this.mockDB.data[id]) {
            this.mockDB.data[id] = this.createRecord(newData);
            return true;
        };
        this.mockDB.data[id] = { ...this.mockDB.data[id], ...newData };
        return false;
    }

    async delete(id: number) {
        const prevCount = this.mockDB.data.length;
        this.mockDB.data = this.mockDB.data.filter((record: any) => record[this.idName] !== id);
        return this.mockDB.data.length < prevCount ? id : null;
    }
}

export default Model;