import copy

# init
multiplication_count = 8

if multiplication_count == 2:
    # for 2x2
    level = 1
    out_init = [[1], [2]]
    in_init = [4, 0]
elif multiplication_count == 3:
    # for 3x3
    level = 1
    out_init = [[1], [2], [3]]
    in_init = [4, 6, 9]
elif multiplication_count == 4:
    # for 4x4
    level = 2
    out_init = [[1], [2], [3], [4]]
    in_init = [6, 8, 9, 12, 16, 0, 0, 0]
elif multiplication_count == 5:
    # for 5x5
    level = 2
    out_init = [[1], [2], [3], [4], [5]]
    in_init = [6, 8, 10, 9, 12, 15, 16, 20, 25, 0]
elif multiplication_count == 6:
    # for 6x6
    level = 2
    out_init = [[1], [2], [3], [4], [5], [6]]
    in_init = [8, 10, 12, 9, 15, 18, 16, 20, 24, 25, 30, 36]
elif multiplication_count == 7:
    # for 7x7
    level = 3
    out_init = [[1], [2], [3], [4], [5], [6], [7]]
    in_init = [8, 10, 12, 14, 9, 15, 18, 21, 16, 20, 24, 28, 25, 30, 35, 36, 42, 49, 0, 0, 0]
elif multiplication_count == 8:
    # for 8x8
    level = 3
    out_init = [[1], [2], [3], [4], [5], [6], [7], [8]]
    in_init = [10, 12, 14, 16, 9, 15, 18, 21, 24, 20, 28, 32, 25, 30, 35, 40, 36, 42, 48, 49, 56, 64, 0, 0]
elif multiplication_count == 9:
    # for 9x9
    level = 3
    out_init = [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
    in_init = [10, 12, 14, 16, 18, 15, 21, 24, 27, 20, 28, 32, 36, 25, 30, 35, 40, 45, 42, 48, 54, 49, 56, 63, 64, 72, 81]
elif multiplication_count == 10:
    # for 10x10
    level = 4
    out_init = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]
    in_init = [12, 14, 16, 18, 20, 15, 21, 24, 27, 30, 28, 32, 36, 40, 25, 35, 45, 50, 42, 48, 54, 60, 49, 56, 63, 70, 64, 72, 80, 81, 90, 100, 0, 0, 0, 0, 0, 0, 0, 0]
elif multiplication_count == 11:
    # for 11x11
    level = 4
    out_init = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11]]
    in_init = [12, 14, 16, 18, 20, 22, 15, 21, 24, 27, 30, 33, 28, 32, 36, 40, 44, 25, 35, 45, 50, 55, 42, 48, 54, 60, 66, 49, 56, 63, 70, 77, 64, 72, 80, 88, 81, 90, 99, 100, 110, 121, 0, 0]
elif multiplication_count == 12:
    # for 12x12
    level = 4
    out_init = [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12]]
    in_init = [14, 16, 18, 20, 22, 24, 15, 21, 27, 30, 33, 36, 28, 32, 40, 44, 48, 25, 35, 45, 50, 55, 60, 42, 54, 66, 72, 49, 56, 63, 70, 77, 84, 64, 80, 88, 96, 81, 90, 99, 108, 100, 110, 120, 121, 132, 144, 0]

# generate number forbidden
number_forbidden_preset = [[0]]
for i in range(0, multiplication_count):
    number_forbidden_preset.append([])
    for j in range(0, multiplication_count):
        number_forbidden_preset[i+1].append((i+1)*(j+1))
print(number_forbidden_preset)


def add_forbidden(forbidden_numbers, new_value):
    ret = forbidden_numbers
    for i in range(0, multiplication_count+1):
        if new_value in number_forbidden_preset[i]:
            ret = ret + number_forbidden_preset[i]
            ret = list(set(ret))
    return ret


def recursive_func_level_1(available_numbers, output_array, output_index):
    available_numbers_len = len(available_numbers)
    if output_index > (multiplication_count - 2):
        print("output_index: %d, available_numbers_len: %d" %(output_index, available_numbers_len))
    if available_numbers_len < 1:
        print(output_array)
        return
    forbidden_numbers = add_forbidden([], output_array[output_index][0])
    for i in range(0, available_numbers_len):
        if available_numbers[i] in forbidden_numbers:
            continue
        output_array_copy = copy.deepcopy(output_array)
        available_numbers_copy = copy.deepcopy(available_numbers)
        output_array_copy[output_index].append(available_numbers[i])
        available_numbers_copy.remove(available_numbers[i])
        recursive_func_level_1(available_numbers_copy, output_array_copy, output_index+1)


def recursive_func_level_2(available_numbers, output_array, output_index):
    available_numbers_len = len(available_numbers)
    if output_index > (multiplication_count - 2):
        print("output_index: %d, available_numbers_len: %d" %(output_index, available_numbers_len))
    if available_numbers_len < 2:
        print(output_array)
        return
    forbidden_numbers = add_forbidden([], output_array[output_index][0])
    for i in range(0, available_numbers_len-1):
        if available_numbers[i] in forbidden_numbers:
            continue
        forbidden_numbers1 = add_forbidden(forbidden_numbers, available_numbers[i])
        for j in range(i, available_numbers_len):
            if available_numbers[j] in forbidden_numbers1:
                continue
            output_array_copy = copy.deepcopy(output_array)
            available_numbers_copy = copy.deepcopy(available_numbers)
            output_array_copy[output_index].append(available_numbers[i])
            available_numbers_copy.remove(available_numbers[i])
            output_array_copy[output_index].append(available_numbers[j])
            available_numbers_copy.remove(available_numbers[j])
            recursive_func_level_2(available_numbers_copy, output_array_copy, output_index+1)


def recursive_func_level_3(available_numbers, output_array, output_index):
    available_numbers_len = len(available_numbers)
    if output_index > (multiplication_count - 2):
        print("output_index: %d, available_numbers_len: %d" %(output_index, available_numbers_len))
    if available_numbers_len < 3:
        print(output_array)
        return
    forbidden_numbers = add_forbidden([], output_array[output_index][0])
    for i in range(0, available_numbers_len-2):
        if available_numbers[i] in forbidden_numbers:
            continue
        forbidden_numbers1 = add_forbidden(forbidden_numbers, available_numbers[i])
        for j in range(i, available_numbers_len-1):
            if available_numbers[j] in forbidden_numbers1:
                continue
            forbidden_numbers2 = add_forbidden(forbidden_numbers1, available_numbers[j])
            for k in range(j, available_numbers_len):
                if available_numbers[k] in forbidden_numbers2:
                    continue
                output_array_copy = copy.deepcopy(output_array)
                available_numbers_copy = copy.deepcopy(available_numbers)
                output_array_copy[output_index].append(available_numbers[i])
                available_numbers_copy.remove(available_numbers[i])
                output_array_copy[output_index].append(available_numbers[j])
                available_numbers_copy.remove(available_numbers[j])
                output_array_copy[output_index].append(available_numbers[k])
                available_numbers_copy.remove(available_numbers[k])
                recursive_func_level_3(available_numbers_copy, output_array_copy, output_index+1)


def recursive_func_level_4(available_numbers, output_array, output_index):
    available_numbers_len = len(available_numbers)
    if output_index > (multiplication_count - 2):
        print("output_index: %d, available_numbers_len: %d" %(output_index, available_numbers_len))
    if available_numbers_len < 4:
        print(output_array)
        return
    forbidden_numbers = add_forbidden([], output_array[output_index][0])
    for i in range(0, available_numbers_len-3):
        if available_numbers[i] in forbidden_numbers:
            continue
        forbidden_numbers1 = add_forbidden(forbidden_numbers, available_numbers[i])
        for j in range(i, available_numbers_len-2):
            if available_numbers[j] in forbidden_numbers1:
                continue
            forbidden_numbers2 = add_forbidden(forbidden_numbers1, available_numbers[j])
            for k in range(j, available_numbers_len-1):
                if available_numbers[k] in forbidden_numbers2:
                    continue
                forbidden_numbers3 = add_forbidden(forbidden_numbers2, available_numbers[k])
                for l in range(k, available_numbers_len):
                    if available_numbers[l] in forbidden_numbers3:
                        continue
                    output_array_copy = copy.deepcopy(output_array)
                    available_numbers_copy = copy.deepcopy(available_numbers)
                    output_array_copy[output_index].append(available_numbers[i])
                    available_numbers_copy.remove(available_numbers[i])
                    output_array_copy[output_index].append(available_numbers[j])
                    available_numbers_copy.remove(available_numbers[j])
                    output_array_copy[output_index].append(available_numbers[k])
                    available_numbers_copy.remove(available_numbers[k])
                    output_array_copy[output_index].append(available_numbers[l])
                    available_numbers_copy.remove(available_numbers[l])
                    recursive_func_level_4(available_numbers_copy, output_array_copy, output_index+1)


if level == 1:
    recursive_func_level_1(in_init, out_init, 0)
elif level == 2:
    recursive_func_level_2(in_init, out_init, 0)
elif level == 3:
    recursive_func_level_3(in_init, out_init, 0)
else:
    recursive_func_level_4(in_init, out_init, 0)
