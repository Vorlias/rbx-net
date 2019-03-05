import Net from "index";
import { Serializable } from "Serializer";
import Serializer from "Serializer";

export = () => {
	describe("serialization", () => {
		it("should serialize using Net.Serialize", () => {
			class Person {
				public name: string;
				constructor(name: string) {
					this.name = name;
				}
			}

			const person = new Person("Testing");
			const serializedPerson = Net.Serialize(person);
			expect(serializedPerson.name).to.equal("Testing");
		});

		it("should serialize using built in class serialize methods", () => {
			class Person {
				public name: string;
				constructor(name: string) {
					this.name = name;
				}

				public serialize(): Serializable<Person> {
					return { name: this.name };
				}
			}

			const person = new Person("Testing 2");
			const serializedPerson = Net.Serialize(person);
			expect(serializedPerson.name).to.equal("Testing 2");
		});
	});

	describe("Deserialization", () => {
		it("should deserialize using a method", () => {
			class Person {
				public name: string;
				constructor(name: string) {
					this.name = name;
				}

				public static deserialize(serialized: Serializable<Person>) {
					return new Person(serialized.name);
				}
			}

			const person: Serializable<Person> = { name: "Test Name" };
			const deserialized = Serializer.deserialize<Person>(person, p => new Person(p.name));

			expect(deserialized instanceof Person).to.equal(true);
			expect(deserialized.name).to.be.ok();
			expect(deserialized.name).to.equal("Test Name");
		});

		// it("should allow static deserialization", () => {
		// 	class Person {
		// 		public name: string;
		// 		constructor(name: string) {
		// 			this.name = name;
		// 		}

		// 		public static deserialize(serialized: Serializable<Person>) {
		// 			return new Person(serialized.name);
		// 		}
		// 	}

		// 	const person: Serializable<Person> = { name: "Test Name" };
		// 	const deserialized = Serializer.deserialize<Person>(person, Person);
		// 	expect(deserialized.name).to.be.ok();
		// 	expect(deserialized.name).to.equal("Test Name");
		// })
	});



}