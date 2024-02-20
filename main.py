import random
import string
import hashlib


class Cracker:
    def __init__(self):
        self.mot_de_passe = input("Quel est le mot de passe : ")
        self.lettres = string.ascii_letters
        self.tantative = 0
        self.suiv = ''
        self.resultat = ''

    def crackerme(self):
        for i in range(len(self.mot_de_passe)):
            while self.mot_de_passe[i] != self.suiv:
                self.suiv = random.choice(self.lettres)
                print(str(self.tantative), ':', self.resultat + self.suiv)
                self.tantative += 1
            self.resultat += self.suiv
        return self.resultat

    def hash_crack(self):
        hashlib.md5(self.mot_de_passe.encode('utf8')).hexdigest()
        try:
            mots_fr = open("/home/abdouljr/Dev/liste_mots.txt", 'r')
            for mot in mots_fr.readlines():
                mot = mot.strip('\n').encode('utf8')
                print(mot)
        except FileNotFoundError:
            print("Erreur: chemin du fichier incorrect ou fichier introuvable .")
        except Exception as ereur:
            print("Erreur: " + str(ereur))


cracker = Cracker()
cracker.hash_crack()
