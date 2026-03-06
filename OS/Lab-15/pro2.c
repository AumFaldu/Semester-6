#include <stdio.h>

int main() {
    int n, frames, i, j, k, flag, pos, farthest;
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

    for(i = 0; i < n; i++) {
        flag = 0;
        for(j = 0; j < frames; j++) {
            if(frame[j] == page[i]) {
                flag = 1; // page hit
                break;
            }
        }

        if(flag == 0) { // page fault
            int empty = -1;
            for(j = 0; j < frames; j++) {
                if(frame[j] == -1) {
                    empty = j;
                    break;
                }
            }

            if(empty != -1)
                frame[empty] = page[i];
            else {
                farthest = i;
                int replace = -1;
                for(j = 0; j < frames; j++) {
                    int found = 0;
                    for(k = i + 1; k < n; k++) {
                        if(frame[j] == page[k]) {
                            if(k > farthest) {
                                farthest = k;
                                replace = j;
                            }
                            found = 1;
                            break;
                        }
                    }
                    if(!found) { replace = j; break; }
                }
                frame[replace] = page[i];
            }
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