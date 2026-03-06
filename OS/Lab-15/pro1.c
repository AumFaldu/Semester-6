#include <stdio.h>

int main() {
    int n, frames, i, j, flag, k;
    int page[50], frame[10], temp[50];
    int faults = 0;

    printf("Enter number of pages: ");
    scanf("%d", &n);

    printf("Enter page reference sequence: ");
    for(i = 0; i < n; i++)
        scanf("%d", &page[i]);

    printf("Enter number of frames: ");
    scanf("%d", &frames);

    for(i = 0; i < frames; i++)
        frame[i] = -1;

    k = 0;
    for(i = 0; i < n; i++) {
        flag = 0;
        for(j = 0; j < frames; j++) {
            if(frame[j] == page[i]) {
                flag = 1; // page hit
                break;
            }
        }

        if(flag == 0) { // page fault
            frame[k] = page[i];
            k = (k + 1) % frames; // FIFO replacement
            faults++;
        }

        printf("Frames after inserting page %d: ", page[i]);
        for(j = 0; j < frames; j++)
            printf("%d ", frame[j]);
        printf("\n");
    }

    printf("\nTotal Page Faults: %d\n", faults);
    return 0;
}