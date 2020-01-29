import copy

# init
multiplication_count = 9
out_init = [[1], [2], [3], [4], [5], [6], [7], [8], [9]]
in_init = [10, 12, 14, 16, 18, 15, 21, 24, 27, 20, 28, 32, 36, 25, 30, 35, 40, 45, 42, 48, 54, 49, 56, 63, 64, 72, 81]
number_forbidden_preset = []

# generate number forbidden
for i in range(0, multiplication_count):
    number_forbidden_preset.append([])
    for j in range(0, multiplication_count):
        number_forbidden_preset[i].append((i+1)*(j+1))
print(number_forbidden_preset)


def add_forbidden(forbidden_numbers, new_value):
    ret = forbidden_numbers
    for i in range(0, multiplication_count):
        if new_value in number_forbidden_preset[i]:
            ret = ret + number_forbidden_preset[i]
    return ret


def recursive_func(available_numbers, output_array, output_index):
    available_numbers_len = len(available_numbers)
    if output_index > 7:
        print("output_index: %d, available_numbers_len: %d" %(output_index, available_numbers_len))
    if available_numbers_len < 3:
        print(output_array)
        return
    forbidden_numbers = add_forbidden([], output_array[output_index][0])
    for i in range(0, available_numbers_len-2):
        if available_numbers[i] in forbidden_numbers:
            continue
        forbidden_numbers1= add_forbidden(forbidden_numbers, available_numbers[i])
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
                recursive_func(available_numbers_copy, output_array_copy, output_index+1)


recursive_func(in_init, out_init, 0)