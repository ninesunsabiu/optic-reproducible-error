import * as O from '@effect/data/Option';
import * as Optic from '@fp-ts/optic';

interface Street {
	readonly num: number;
	readonly name: O.Option<string>;
}
interface Address {
	readonly city: string;
	readonly street: Street;
}
interface Company {
	readonly name: string;
	readonly address: Address;
}
interface Employee {
	readonly name: string;
	readonly company: Company;
}

const _firstChar = Optic.id<Employee>().at('company').at('address').at('street').at('name').some();

