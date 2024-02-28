import argparse


class Arguments:
    def __init__(self):
        self.parser = argparse.ArgumentParser(description="Password Cracker")

    def args(self):
        self.parser.add_argument("-f", "--file", dest="file", help="Chemin du dictionnaire de mot de passes",
                                 required=False)
        self.parser.add_argument("-g", "--gen", dest="gen", help="Générer un hash MD5 pour le mot passe",
                                 required=False)
        self.parser.add_argument("-m", "--md5", dest="md5", help="Mot de passe hacher (MD5)",
                                 required=False)
        self.parser.add_argument("-l", "--plength", dest="plength", help="La taille du mot de passe",
                                 required=False, type=int)
        return self.parser.parse_args()
