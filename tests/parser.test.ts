import { parseCSV } from "../src/parser";
import * as path from "path";
import { z } from "zod";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const PEOPLE_NUMBERS_CSV_PATH = path.join(__dirname, "../data/people_numbers.csv");
test("parseCSV yields arrays", async () => {
    const schema = z.tuple([z.string(), z.string()]);
    const results = await parseCSV(PEOPLE_CSV_PATH, schema)
    expect(results).toHaveLength(5);
    expect(results[0]).toEqual(["name", "age"]);
    expect(results[1]).toEqual(["Alice", "23"]);
    expect(results[2]).toEqual(["Bob", "thirty"]);
    expect(results[3]).toEqual(["Charlie", "25"]);
    expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
    const schema = z.tuple([z.string(), z.string()]);
    const results = await parseCSV(PEOPLE_NUMBERS_CSV_PATH, schema)
    for (const row of results) {
        expect(Array.isArray(row)).toBe(true);
    }
});