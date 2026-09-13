from PIL import Image

def encode(image,message):
    encoded_message = message.encode("utf-8")
    converted = ''.join(format(byte,'08b') for byte in encoded_message)
    # converted=''.join(format(ord(char),'08b')for char in message) #8-bits storage per character; 8-bit representation of a character; binary representation
    payload_length=len(converted) #normal int

    sign = "IRIS"
    iris_sign = ''.join(format(ord(char),'08b') for char in sign) #32-bits but in 8-bit, like IRIS = 4 char * 8 bits = 32 bits in total
    payload_length_bits = format(payload_length,'032b') #convert length from decimal to 32-bit format n store it (for higher numbers if the length of the payload is more); also the decoder knows where the length field ends, exactly 32 bits cause length is represented in 32-bit format
    encoded_bits = iris_sign + payload_length_bits + converted #variable total, holds everything together
    image_capacity = image.height * image.width * 3

    if image_capacity<len(encoded_bits):
        return "Message is too large for this image"
    
    else:
        
        secret_index=0
        for y in range(image.height):
            for x in range(image.width): #iterate through pixels
                pixel=image.getpixel((x,y))
                pixel=list(pixel) #converting tuple to list for modification

                for i in range(3): #iterate through the rgb channel (1+1+1, so range(3))
                    if secret_index<len(encoded_bits):
                        secret_bit=int(encoded_bits[secret_index])
                        if (pixel[i] & 1)!=secret_bit:
                            if secret_bit==0:
                                pixel[i]=pixel[i] & ~1 #force 0
                            else:
                                pixel[i]=pixel[i] | 1 #force 1
                        secret_index+=1 #move to the next index
                pixel=tuple(pixel) #converting list to tuple for changing the pixes
                image.putpixel((x,y),pixel) #putting back the changed pixels

                if secret_index == len(encoded_bits):
                    print("Message encoded!")
                    return image
    return image


if __name__ == "__main__":

    image_path = input("Enter the image path: ")
    image = Image.open(image_path)

    message = input("Enter the messsage to be encoded: ")

    encoded_image=encode(image,message)

    if isinstance(encoded_image, Image.Image):
        encoded_image.save("outputs/test1.png")
    else:
        print(encoded_image)





#payload header and metadata
#message = input("Enter the message: ")

# print(f"Encoded bits (sign + payload_length + payload) = ",encoded_bits)

#Example for payload header format:
                # ┌────────────────┬────────────────┬─────────────────┐
                # │ IRIS           │ LENGTH = 16    │ "hi"            │      
                # │ 32 bits        │ 32 bits        │ 16 bits         │
                # └────────────────┴────────────────┴─────────────────┘
#length is 16 because "hi" in 8-bit representation, so 8+8=16 and that 16 is represented in 32-bit