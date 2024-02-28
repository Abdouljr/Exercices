import random
import string
import hashlib
import sys
import time
from arguments import Arguments

argument = Arguments()
args = argument.args()


def gen_hash(mot: str) -> str:
    return hashlib.md5(mot.encode('utf8')).hexdigest()


class Cracker:
    def __init__(self, paramettres):
        self.mot_de_passe = ""
        self.lettres = string.ascii_letters
        self.tantative = 0
        self.suiv = ''
        self.resultat = ''
        self.trouve = False
        self.paramettres = paramettres

    def crackerme(self):
        for i in range(len(self.mot_de_passe)):
            while self.mot_de_passe[i] != self.suiv:
                self.suiv = random.choice(self.lettres)
                print(str(self.tantative), ':', self.resultat + self.suiv)
                self.tantative += 1
            self.resultat += self.suiv
        return self.resultat

    def crack_incr(self, md5, length, currpass=None):
        if currpass is None:
            currpass = []
        if length >= 1:
            if len(currpass) == 0:
                currpass = ['a' for _ in range(length)]
                self.crack_incr(md5, length, currpass)
            else:
                for c in self.lettres:
                    currpass[-1] = c
                    currentword = "".join(currpass)
                    print("Encours .. :" + currentword)
                    if gen_hash(currentword) == md5:
                        print("MOT DE PASSE TROUVÉ : " + currentword)
                        self.trouve = True
                        break
                    else:
                        print(currpass.copy())
                        self.crack_incr(md5, length - 1, currpass)

    def crack_dict(self, hash_md5, liste_mots, temps=None):
        try:
            mots_fr = open(str(liste_mots), 'r')
            for mot in mots_fr.readlines():
                self.tantative += 1
                mot = mot.strip('\n')
                mot_md5 = gen_hash(mot)
                print(self.tantative, "", mot_md5, " ", hash_md5)
                if hash_md5 == mot_md5:
                    print("Mot de passe trouvé: mot( " + str(mot) + " ) " + self.paramettres.md5)
                    if temps is not None:
                        print("TEMPS: " + str(time.time() - temps) + " secondes")
                    self.trouve = True
                    break
            if not self.trouve:
                print("Mot de passe non trouvé !!")
            mots_fr.close()
        except FileNotFoundError:
            print("Erreur: chemin du fichier incorrect ou fichier introuvable .")
            sys.exit(1)
        except Exception as ereur:
            print("Erreur: " + str(ereur))
            sys.exit(2)


cracker = Cracker(args)
debut = time.time()
if args.md5:
    print("CRACKAGE DU HASH DU MOT[" + args.md5 + "]")
    if args.file and not args.plength:
        print("CRACKAGE PAR LE DICTIONNAIRE [" + args.file + "] ")
        cracker.crack_dict(gen_hash(args.md5), args.file, debut)
    elif args.plength and not args.file:
        print("CRACKAGE PAR BRUTE-FORCE DE [" + str(args.plength) + "] CARACTÈRES")
    else:
        print("VEILLEZ PRENDRE L'OPTION -f(utilisation d'un dictionnaire) OU -l(pour la brute-force)")
else:
    print("AUCUNE OPTION N'A ÉTÉ SELECTIONNER")

if args.gen:
    print("HASH DU " + args.gen + " : " + gen_hash(args.gen))
