import random
import string
import hashlib
import sys
from arguments import Arguments


argument = Arguments()
args = argument.args()


class Cracker:
    def __init__(self):
        self.mot_de_passe = ""
        self.lettres = string.ascii_letters
        self.tantative = 0
        self.suiv = ''
        self.resultat = ''
        self.trouve = False
        self.args = args

    def crackerme(self):
        for i in range(len(self.mot_de_passe)):
            while self.mot_de_passe[i] != self.suiv:
                self.suiv = random.choice(self.lettres)
                print(str(self.tantative), ':', self.resultat + self.suiv)
                self.tantative += 1
            self.resultat += self.suiv
        return self.resultat

    def crack_dict(self):
        # self.mot_de_passe = hashlib.md5(self.mot_de_passe.encode('utf8')).hexdigest()
        try:
            mots_fr = open(str(self.args.file), 'r')
            for mot in mots_fr.readlines():
                self.tantative += 1
                mot = mot.strip('\n').encode('utf8')
                mot_md5 = hashlib.md5(mot).hexdigest()
                print(self.tantative, "", mot)
                if self.args.md5 == mot_md5:
                    print("Mot de passe trouvé: mot( " + str(mot) + " ) " + self.args.md5)
                    self.trouve = True
                    break
            if not self.trouve:
                print("Mot de passe non trouvé !!")
            self.args.file.close()
        except FileNotFoundError:
            print("Erreur: chemin du fichier incorrect ou fichier introuvable .")
            sys.exit(1)
        except Exception as ereur:
            print("Erreur: " + str(ereur))
            sys.exit(2)


cracker = Cracker()
print(args.md5)

