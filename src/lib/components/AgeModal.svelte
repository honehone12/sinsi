<script lang="ts">
    import { AGE_MODAL_ID } from "$lib/modal";
    import AgeVerification from "$lib/components/AgeVerification.svelte";

    interface Props {
        ref: string;
    }

    let {ref}: Props = $props();
</script>

<dialog id={AGE_MODAL_ID} class="modal">
    <div class="modal-box flex flex-col items-center">
        <AgeVerification {ref}/>
    </div>
</dialog>
