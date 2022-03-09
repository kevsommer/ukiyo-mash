def expected_score(R_A: int, R_B: int):
    return 1 / (1 + 10 ** ((R_B - R_A) / 400))

def new_score(R_A: int, S_A: int, E_A: int):
    k = 40
    return int(R_A + k * (S_A - E_A))