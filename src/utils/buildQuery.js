export const buildQuery = (searchQuery, { age, gender, prof, country }) => {
	let query = searchQuery;

	if (age || gender || prof || country) {
		query += ',Tags : ';
	}

	if (country) {
		query += `Country : ${country} `;
	}
	if (age) {
		query += `Age : ${age} `;
	}
	if (gender) {
		query += `Gender : ${gender} `;
	}
	if (prof) {
		query += `Profession : ${prof} `;
	}

	return query;
}