<?php

test('csr policy page renders successfully', function (): void {
    $this->get(route('csr-policy'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('frontend/legal/csr-policy')
        );
});
