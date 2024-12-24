/**
 	Вернуть валидные емаил адреса - количество адресов числом, согласно правилам:
 - адрес состоит из имени и домена разделенного @
 - на точки не обращаем внимания (они не участвуют в валидации)
 - все что после знака + в имени игнорируется (не участвуют в валидации)
 - домен валидировать не нужно, только адрес


 Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
	Output: 2
	Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
 */


// https://leetcode.com/problems/unique-email-addresses/description/

const numUniqueEmails = function (emails) {
  const set = new Set();

  for (let i = 0; i < emails.length; i++) {
	const [name, domain] = emails[i].split('@')
	const filteredName = name.split('+')[0].replaceAll('.', '')
	set.add(`${filteredName}@${domain}`)
  }
  return set.size
};
console.log('-->  => ',
  numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])
);
