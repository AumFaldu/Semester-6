#include <stdio.h>

int main() {
    int n, frames, i, j, k, flag;
    int page[50], frame[10], time[10];
    int faults = 0, counter = 0;

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
                flag = 1;
                counter++;
                time[j] = counter; // update last used time
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

            if(empty != -1) {
                frame[empty] = page[i];
                counter++;
                time[empty] = counter;
            } else {
                int lru = 0;
                for(j = 1; j < frames; j++) {
                    if(time[j] < time[lru])
                        lru = j;
                }
                frame[lru] = page[i];
                counter++;
                time[lru] = counter;
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