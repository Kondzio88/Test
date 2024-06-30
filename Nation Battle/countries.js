class Units {
	constructor(name,type,man,att,def,img,info,ability) {
		this.name = name
		this.type = type
		this.manouver = man
		this.hp = 100
		this.att = att
		this.def = def
		this.power = 100
		this.img = img
		this.info = info
		this.ability = ability
	}
}

// USA Units Stack

let usa = []

const abrams = new Units('M1 Abrams','Tank','Land',60,70,'images/usa-abrams.png','pociski penetrujace + 20 att',function(){
	this.att += 20
})

const apache = new Units('AH-64 Apache','Heli','Sky',50,50,'images/usa-apache.png','pociski przeciwpancerne + 30 att',function(){
	this.att += 30
})

const marins = new Units('US Marines','Infa','Land',40,40,'images/usa-marines.png','elitarni komandosi + 10 att + 10 def',function(){
	this.att += 10
	this.def += 10
})

const dreadnout = new Units('USS Dreadnouth','Ship','Sea',70,70,'images/usa-dreadnouth.png','pociski ziemia powietrze + 20 att',function(){
	this.att += 20
})

usa.push(abrams,apache,marins,dreadnout)

// Russia Units Stack

let rus = []

const t90 = new Units('T-90','Tank','Land',50,70,'images/russia-t90.png','pancerz reaktywny + 20 def',function(){
	this.def += 20
})

const k52 = new Units('K-52 Alligator','Heli','Sky',50,50,'images/russia-k52.png','pociski przeciwpancerne + 30 att',function(){
	this.att += 30
})

const specnaz = new Units('Spec-Naz','Infa','Land',40,50,'images/russia-specnaz.png','dzialania dywersyfikacyjne + 20 def',function(){
	this.def += 20
})

const corvetta = new Units('Moskwa','Infa','Land',60,70,'images/russia-corvetta.png','system OPLT + 20 def',function(){
	this.def += 20
})

rus.push(t90,k52,specnaz,corvetta)




