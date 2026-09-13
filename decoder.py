from PIL import Image

def decode(image):

    sign_bits = ""
    sign = ""
    payload_length = 0
    length_bits = ""
    secret_index = 0
    payload_binary = ""
    # payload = ""
    payload = []
    finished = False


    for y in range(image.height):
        for x in range(image.width):
            pixel=image.getpixel((x,y))
            for i in range(3):

                if secret_index<32:
                    sign_bits += str(pixel[i] & 1)

                    if len(sign_bits)==32:
                        for i in range (0,32,8):
                            sign += chr(int(sign_bits[i:i+8],2))

                        if sign != "IRIS":
                            return "IRIS Sign not found! "

                if secret_index>=32 and secret_index<64:
                    if sign == "IRIS":
                        length_bits += str(pixel[i] & 1)

                if secret_index==64:
                    payload_length = int(length_bits,2)
                    end_limit = payload_length + 64 - 1

                if secret_index>=64 and secret_index<=end_limit:
                    payload_binary += str(pixel[i] & 1)

                secret_index = secret_index+1

            if secret_index>=64 and secret_index>end_limit:
                finished = True
                break

        if finished:
            break

    for i in range(0,payload_length,8):
        # payload += chr(int(payload_binary[i:i+8],2))
        payload.append(int(payload_binary[i:i+8],2))

    payload = bytes(payload)
    payload = payload.decode("utf-8")
    print(payload)

    return payload