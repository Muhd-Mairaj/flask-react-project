#include <stdio.h>

int main() {
        void* ptr = 0x00000;
        int x = 0;
        while ( x == 0 ) {
                puts("hi");
                printf("%p\t%c\n",ptr,*(int*)ptr);
                ptr++;
        }
}
